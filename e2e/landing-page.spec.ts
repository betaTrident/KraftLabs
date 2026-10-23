import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("landing page renders and interactions work", async ({ page }, testInfo) => {
  const runtimeErrors: string[] = [];
  page.on("pageerror", (error) => runtimeErrors.push(error.message));

  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page).toHaveTitle(/Kr4ftLabs/);
  await expect(page.getByRole("heading", { name: /Useful software, made with intent/i })).toBeVisible();
  await expect(page.getByText("No placeholders dressed as products.")).toBeVisible();

  for (const image of await page.locator(".brand-lockup img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() =>
      image.evaluate((element) =>
        element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0,
      ),
    ).toBe(true);
  }

  const illustrations = page.locator("img.landing-illustration");
  await expect(illustrations).toHaveCount(4);
  for (const image of await illustrations.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveAttribute("alt", "");
    await expect.poll(() =>
      image.evaluate((element) =>
        element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0,
      ),
    ).toBe(true);
  }

  const iconHrefs = await page.locator('link[rel~="icon"]').evaluateAll((links) =>
    links.map((link) => (link as HTMLLinkElement).href),
  );
  expect(iconHrefs.some((href) => href.includes("/brand/app-icon-"))).toBe(true);

  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);

  const headlineLineCount = await page.locator(".hero-copy h1").evaluate((element) => {
    const styles = window.getComputedStyle(element);
    return element.getBoundingClientRect().height / Number.parseFloat(styles.lineHeight);
  });
  expect(headlineLineCount).toBeLessThanOrEqual(3.1);

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);

  const originalNote = await page.locator(".note-window h2").textContent();
  await page.getByRole("button", { name: "Next maker note" }).click();
  await expect(page.locator(".note-window h2")).not.toHaveText(originalNote ?? "");

  const honestyPanel = page.getByRole("button", { name: /Honest by default/ });
  await honestyPanel.click();
  await expect(honestyPanel).toHaveAttribute("aria-expanded", "true");

  await page.getByRole("button", { name: "Previous maker note" }).click();
  await expect(page.locator(".note-window h2")).toHaveText(originalNote ?? "");

  for (const [index, scene] of (await page.locator(".story-scene").all()).entries()) {
    await scene.locator(".preview-canvas").evaluate(
      (element) => element.scrollIntoView({ block: "center", behavior: "instant" }),
    );
    await expect.poll(() => scene.locator(".scene-shade").evaluate(
      (element) => Number(getComputedStyle(element).opacity),
    )).toBeLessThan(0.05);
    await scene.screenshot({ path: testInfo.outputPath(`illustration-${index + 1}.png`) });
  }
  await page.locator(".maker-visual").screenshot({ path: testInfo.outputPath("workshop.png") });

  await page.screenshot({ path: testInfo.outputPath("full-page.png"), fullPage: true });
  expect(runtimeErrors).toEqual([]);
});

test("illustrations remain visible with reduced motion and keyboard navigation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "networkidle" });

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Kr4ftLabs home" })).toBeFocused();
  await page.getByRole("link", { name: "See the collection" }).focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#collection$/);

  const honestyPanel = page.getByRole("button", { name: /Honest by default/ });
  await honestyPanel.focus();
  await expect(honestyPanel).toBeFocused();
  await expect(honestyPanel).toHaveAttribute("aria-expanded", "true");

  const motionState = await page.evaluate(() => ({
    scroll: getComputedStyle(document.documentElement).scrollBehavior,
    words: Array.from(document.querySelectorAll(".reveal-word"), (element) => getComputedStyle(element).opacity),
    shades: Array.from(document.querySelectorAll(".scene-shade"), (element) => getComputedStyle(element).opacity),
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  }));
  expect(motionState.scroll).toBe("auto");
  expect(motionState.words.every((opacity) => opacity === "1")).toBe(true);
  expect(motionState.shades.every((opacity) => opacity === "0")).toBe(true);
  expect(motionState.overflow).toBe(false);
});

import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("landing page renders and interactions work", async ({ page }, testInfo) => {
  const runtimeErrors: string[] = [];
  page.on("pageerror", (error) => runtimeErrors.push(error.message));

  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page).toHaveTitle(/Kr4ftLabs/);
  await expect(page.getByRole("heading", { name: /Useful software, made with intent/i })).toBeVisible();
  await expect(page.getByText("No placeholders dressed as products.")).toBeVisible();

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

  await page.screenshot({ path: testInfo.outputPath("full-page.png"), fullPage: true });
  expect(runtimeErrors).toEqual([]);
});

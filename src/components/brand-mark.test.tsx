import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BrandMark } from "@/components/brand-mark";

describe("BrandMark", () => {
  it("exposes the written brand name to assistive technology", () => {
    render(<BrandMark compact />);

    expect(screen.getByRole("img", { name: "Kr4ftLabs" })).toHaveAttribute(
      "src",
      "/brand/symbol-dark.webp",
    );
  });
});

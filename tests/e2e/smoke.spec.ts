import { expect, test } from "@playwright/test";

test("home page links to the blog listing", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Initial blog scaffold" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Browse posts" })).toBeVisible();
});

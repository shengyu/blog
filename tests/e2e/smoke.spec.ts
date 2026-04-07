import { expect, test } from "@playwright/test";

import { loadRoute } from "./helpers";

test("home page keeps the branded shell visible on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 960 });
  await loadRoute(page, "/");

  const banner = page.getByRole("banner");
  const primaryNav = page.getByRole("navigation", { name: "Primary navigation" });
  const footerNav = page.getByRole("navigation", { name: "Footer navigation" });

  await expect(banner).toContainText("Warm editorial notes");
  await expect(page.locator(".site-header")).toHaveCSS("flex-direction", "row");
  await expect(primaryNav.getByRole("link", { name: "Home" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(primaryNav.getByRole("link", { name: "Blog" })).toBeVisible();
  await expect(footerNav.getByRole("link", { name: "Style guide" })).toBeVisible();
  await expect(page.getByRole("contentinfo")).toContainText(
    "Shared shell, responsive navigation",
  );
  await expect(
    page.getByRole("heading", { name: "Designed for deliberate reading" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Browse posts" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Review style guide" })).toBeVisible();
});

test("article pages reuse the same shell on mobile widths", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await loadRoute(page, "/blog/welcome-to-the-blog/");

  const primaryNav = page.getByRole("navigation", { name: "Primary navigation" });
  const footerNav = page.getByRole("navigation", { name: "Footer navigation" });

  await expect(page.getByRole("banner")).toContainText("Blog");
  await expect(page.locator(".site-header")).toHaveCSS("flex-direction", "column");
  await expect(primaryNav.getByRole("link", { name: "Blog" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(primaryNav.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(footerNav.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(page.getByRole("contentinfo")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Welcome to the Blog" }),
  ).toBeVisible();
});

test("style guide publishes the review artifact for pages and components", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 960 });
  await loadRoute(page, "/style-guide/");

  await expect(page.getByRole("heading", { name: "Style guide" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "How to validate consistency" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Applied mockup set" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Buttons" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Callouts" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open route" }).first()).toBeVisible();
});

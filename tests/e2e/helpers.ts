import fs from "node:fs/promises";
import path from "node:path";

import type { Page } from "@playwright/test";

const distDir = path.resolve(process.cwd(), "dist");

function routeToHtmlFile(route: string) {
  const normalizedRoute = route.startsWith("/") ? route.slice(1) : route;

  if (normalizedRoute === "") {
    return path.join(distDir, "index.html");
  }

  if (normalizedRoute.endsWith("/")) {
    return path.join(distDir, normalizedRoute, "index.html");
  }

  if (normalizedRoute.endsWith(".html")) {
    return path.join(distDir, normalizedRoute);
  }

  return path.join(distDir, normalizedRoute, "index.html");
}

async function inlineStyles(html: string, htmlFilePath: string) {
  const stylesheetLinks = [
    ...html.matchAll(
      /<link\b[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>\s*/gi,
    ),
  ];

  if (stylesheetLinks.length === 0) {
    return html;
  }

  const styles = await Promise.all(
    stylesheetLinks.map(async (match) => {
      const href = match[1];
      const stylesheetPath = href.startsWith("/")
        ? path.join(distDir, href.slice(1))
        : path.resolve(path.dirname(htmlFilePath), href);
      const css = await fs.readFile(stylesheetPath, "utf8");

      return `/* ${href} */\n${css}`;
    }),
  );

  const inlinedStyles = `<style data-inline-e2e>\n${styles.join("\n")}\n</style>`;

  return html
    .replace(
      /<link\b[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']+["'][^>]*>\s*/gi,
      "",
    )
    .replace("</head>", `${inlinedStyles}</head>`);
}

export async function loadRoute(page: Page, route: string) {
  const htmlFilePath = routeToHtmlFile(route);
  const html = await fs.readFile(htmlFilePath, "utf8");
  const preparedHtml = await inlineStyles(html, htmlFilePath);

  await page.setContent(preparedHtml, { waitUntil: "load" });
}

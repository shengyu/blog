import { defineConfig } from "@playwright/test";

const useServer = process.env.E2E_USE_SERVER === "1";
const baseURL = process.env.E2E_BASE_URL ?? "http://127.0.0.1:4321";

export default defineConfig({
  testDir: "tests/e2e",
  use: {
    trace: "on-first-retry",
    ...(useServer ? { baseURL } : {}),
  },
  webServer: useServer
    ? {
        command: "pnpm preview --host 127.0.0.1 --port 4321",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
      }
    : undefined,
});

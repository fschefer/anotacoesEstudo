import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
    timeout: 6000,
    retries: 0,
    testDir: 'tests/e2e',
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'only-on-failure'
    }

}

export default config
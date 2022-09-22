import { test, expect } from '@playwright/test'

test('Simple basic test', async ({ page }) => {

    await page.goto('https://www.example.com')
    let pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
})

//--headed: shows GUI of the browser
//-- browser xyz : Runs the test on 'xyz' browser 

// --config=playwright.config.ts --browser firefox --reporter=html
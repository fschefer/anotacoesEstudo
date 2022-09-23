import { test, expect } from '@playwright/test'

test.only('Searchbar', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.type('#searchTerm', 'Bank')
    await page.keyboard.press('Enter')
    await expect(page.locator('h2')).toBeVisible()
})
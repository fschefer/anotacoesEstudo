import { test, expect } from '@playwright/test'
const URL = 'http://zero.webappsecurity.com/index.html'

test.describe.parallel('Login flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL)

    })
    test('Invalid login', async ({ page }) => {
        await page.click('#signin_button')
        await page.type('#user_login', "someUsername")
        await page.type('#user_password', "userPassword")
        await page.click('text=Sign in')
        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong.')

    })

    test('Valid login + logout', async ({ page }) => {
        await page.click('#signin_button')
        await page.type('#user_login', "username")
        await page.type('#user_password', "password")
        await page.click('text=Sign in')
        await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')
        
        const summaryTab = await page.locator('#account_summary_tab')
        await expect(summaryTab).toBeVisible

        await page.goto("http://zero.webappsecurity.com/logout.html")
        await expect(page).toHaveURL(URL)

    })
})
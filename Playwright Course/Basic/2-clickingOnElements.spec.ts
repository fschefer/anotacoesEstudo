import{test, expect} from '@playwright/test'
test('Click on an element', async ({ page }) => {


    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button') //Clicking by ID
    await page.click('text=Sign in') //Clicking by text

    const errorMessage = await page.locator('.alert-error')// Clicking by class
    await expect(errorMessage).toContainText('Login and/or password are wrong.')



})

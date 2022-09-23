import { test, expect } from '@playwright/test'

test.describe.only('Filling the feedback form', () => {
    test('First test', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/feedback.html')
        await page.type('#name', "Flávio Schefer")
        await page.type('#email', "flavio.schefer@gmail.com")
        await page.type('#subject', 'Test form message')
        await page.type('#comment', 'Hello World!')
        await page.click('input[value="Send Message"]')


    })
    test('Reset the form', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/feedback.html')
        await page.type('#name', "Flávio Schefer")
        await page.type('#email', "flavio.schefer@gmail.com")
        await page.type('#subject', 'Test form message')
        await page.type('#comment', 'Hello World!')
        await page.click('input[type=reset]')

        const commentInput = await page.locator('#comment')
        const nameInput = await page.locator('#name')

        await expect(nameInput && commentInput).toBeEmpty()
        await page.screenshot({path:'./screenshots/empty.png'})
    })
})
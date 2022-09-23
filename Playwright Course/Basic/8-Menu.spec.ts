import { test, expect } from '@playwright/test'
const baseURL = 'http://zero.webappsecurity.com'

test.describe('Making a transfer', () => {
  test.beforeEach(async ({ page }) => {
    page.goto(baseURL)
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')
  })

  test('Doing the transfer', async ({ page }) => {
    page.goto(baseURL + '/bank/transfer-funds.html')
    await page.selectOption('#tf_fromAccountId', '2') //Selecting from a drop down menu
    await page.selectOption('#tf_toAccountId', '1')
    await page.type('input[name=amount]', '20000')
    await page.type('input[name=description]', 'Test transfer')
    await page.click('button[type=submit]')

    const boardHeader = await page.locator('h2.board-header')
    await expect(boardHeader).toHaveText(
      'Transfer Money & Make Payments - Verify'
    )
    await page.click('button[type=submit]')
    await expect(page).toHaveURL(baseURL + '/bank/transfer-funds-confirm.html')
    const alertNotification = await page.locator('.alert-success')
    expect(alertNotification).toBeVisible
  })
})

import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
const URL = 'http://zero.webappsecurity.com/index.html'

test.describe.parallel('Login flow', () => {
  let loginPage: LoginPage
  let homepage: HomePage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homepage = new HomePage(page)
    await homepage.openPage()

  })
  test('Invalid login', async ({ page }) => {
    await homepage.clickButton()
    await loginPage.login('username', 'gsugsu')
    await loginPage.assertError()
  })

  test('Valid login + logout', async ({ page }) => {
    await homepage.clickButton()
    await loginPage.login('username', 'password')
    await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')

    const summaryTab = await page.locator('#account_summary_tab')
    await expect(summaryTab).toBeVisible

    await page.goto('http://zero.webappsecurity.com/logout.html')
    await expect(page).toHaveURL(URL)
  })
})

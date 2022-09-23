import { test, expect } from '@playwright/test'
import { HomePage } from '../Pages/HomePage'

test('Searchbar', async ({ page }) => {
  let homepage: HomePage = new HomePage(page)
  await homepage.openPage()
  await homepage.searchTerm('Bank')
  await expect(page.locator('h2')).toBeVisible()
})

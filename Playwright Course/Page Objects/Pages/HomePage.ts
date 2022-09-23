import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly signInButton: Locator
  readonly searchBox: Locator

  constructor(page: Page) {
    this.page = page
    this.signInButton = page.locator('#signin_button')
    this.searchBox = page.locator('#searchTerm')
  }

  async openPage() {
    const baseURL = 'http://zero.webappsecurity.com'
    await this.page.goto(baseURL)
  }
  async clickButton() {
    await this.signInButton.click()
  }

  async searchTerm(term: string){
    await this.searchBox.type(term)
    await this.page.keyboard.press('Enter')
  }

}

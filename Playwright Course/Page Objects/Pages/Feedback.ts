import { expect, Locator, Page } from '@playwright/test'
export class FeedbackPage {
  readonly page: Page
  readonly nameInput: Locator
  readonly emailInput: Locator
  readonly subjectInput: Locator
  readonly commentInput: Locator
  readonly clearButton: Locator
  readonly submitButton: Locator
  readonly feedbackTitle: Locator

  constructor(page: Page) {
    this.page = page
    this.nameInput = page.locator('#name')
    this.emailInput = page.locator('#email')
    this.subjectInput = page.locator('#subject')
    this.commentInput = page.locator('#comment')
    this.submitButton = page.locator('input[value="Send Message"]')
    this.clearButton = page.locator('input[type=reset]')
    this.feedbackTitle = page.locator('#feedback-title')
  }

  async fillForm(
    name: string,
    email: string,
    subject: string,
    comment: string
  ) {
    await this.nameInput.type(name)
    await this.emailInput.type(email)
    await this.subjectInput.type(subject)
    await this.commentInput.type(comment)
  }

  async resetForm() {
    await this.clearButton.click()
  }

  async sendForm() {
    await this.submitButton.click()
  }

  async assertReset() {
    await expect(this.nameInput).toBeEmpty()
    await expect(this.commentInput).toBeEmpty()
  }

  async assertSentForm() {
    await expect(this.feedbackTitle).toBeVisible()
  }
}

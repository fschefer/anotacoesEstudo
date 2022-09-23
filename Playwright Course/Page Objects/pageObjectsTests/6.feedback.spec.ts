import { test} from '@playwright/test'
import { FeedbackPage } from '../Pages/Feedback'

test.describe.only('Filling the feedback form', () => {
  let feedback: FeedbackPage

  test.beforeEach(async ({ page }) => {
    feedback = new FeedbackPage(page)
    await page.goto('http://zero.webappsecurity.com/feedback.html')
  })

  test('Valid form', async ({ page }) => {
    await feedback.fillForm(
      'Flávio Schefer',
      'flavio@test.com',
      'Test Inquiry',
      'Test comment'
    )
    await feedback.sendForm()
    await feedback.assertSentForm()
  })
  test('Reset the form', async ({ page }) => {
    await feedback.fillForm(
      'Flávio Schefer',
      'flavio@test.com',
      'Test Inquiry',
      'Test comment'
    )
    await feedback.resetForm()
    await feedback.assertReset()

    await page.screenshot({ path: './screenshots/empty.png' })
  })
})

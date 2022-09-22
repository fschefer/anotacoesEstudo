import {test, expect} from '@playwright/test'

test.describe('Grouping tests together',()=> {      
    test('Asserting', async ({ page }) => {
        await page.goto('https://www.example.com')
        await expect(page).toHaveURL('https://www.example.com')
        await expect(page).toHaveTitle('Example Domain')
    
        const h1Element = await page.locator('h1')
        const nonExisting = await page.locator('h6')
    
    
        await expect(h1Element).toBeVisible()
        await expect(h1Element).toHaveText('Example Domain')
        await expect(h1Element).toHaveCount(1)
        await expect(nonExisting).not.toBeVisible()
    })

    test('Typing on an input field', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.type('#user_login', "someUsername")
        await page.type('#user_password', "userPassword")
        await page.click('text=Sign in')
        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong.')
    
    
    })
})

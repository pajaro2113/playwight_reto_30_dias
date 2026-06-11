import { test, expect } from '@playwright/test'

test('login to hrm', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox', {name:'Username'}).fill('Admin')
    await page.getByRole('textbox', {name:'password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()
    await expect(page.getByRole('heading', {name:'Dashboard'})).toBeVisible()

})

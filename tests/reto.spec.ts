import { test, expect } from '@playwright/test'

test('login page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', {name:'Username'}).fill('Admin')
    await page.getByRole('textbox', {name:'password'}).fill('admin123x  ')
    await page.getByRole('button', {name:'Login'}).click

})

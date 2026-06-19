import {test, expect} from '@playwright/test'

test('obtaining lists from the page https://the-internet.herokuapp.com/', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await expect(page.getByRole('heading', {name:'Welcome to the-internet'})).toBeVisible()

    const rows = page.getByRole('list').getByRole('listitem')
    const name_list: string[] = []
    const rowCount = await rows.count()
    console.log(rowCount)

    for (let i=0; i<rowCount; i++){
        const link = rows.nth(i).getByRole('link').nth(0)
        const name = await link.textContent()
        if(name){
            name_list.push(name)
        }
    }
    console.log(name_list)
})

test('login sauce demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('textbox', {name:'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce')
    await page.getByRole('button').click()
})
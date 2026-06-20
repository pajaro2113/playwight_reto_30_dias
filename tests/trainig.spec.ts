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

test('get list of test automatization', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/')
    await expect(page.getByRole('heading', {name:'UITAP'}))
    
    const columnas = page.getByRole('heading').getByRole('link')
    const namecolumn: String[] = []
    const conteoColumnas = await columnas.count()
    console.log('El numero de productos son: ',conteoColumnas)
    for (let i=0; i<conteoColumnas; i++){
        const cell = columnas.nth(i)
        const namecell = await cell.textContent()
        if(namecell){
            namecolumn.push(namecell)
        }
    }
    console.log(namecolumn)
    console.log(namecolumn.sort())//ordena arreglo alfabeticamente
})

test('login sauce demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('textbox', {name:'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce')
    await page.getByRole('button').click()
})
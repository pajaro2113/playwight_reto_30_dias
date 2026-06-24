//practicando web scaripn
import {test, expect} from "@playwright/test"

test('Get all the usernames registred', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox', {name:'Username'}).fill('Admin')
    await page.getByRole('textbox', {name:'password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()

    await expect(page.getByRole('link', {name:'Admin'})).toBeVisible()

    await page.getByRole('link', {name:'Admin'}).click()

    await page.getByRole('navigation', {name:'Topbar Menu'}).getByText('User Management ').click()
    await page.getByRole('menuitem', {name:'Users'}).click()

    const rows = page.getByRole('table').getByRole('row')
    const usernames: string[]= []

    const rowCount = await rows.count()
    
    for (let i = 1; i<rowCount; i++){
        const cell = rows.nth(i).getByRole('cell').nth(1)
        const username = await cell.textContent()

        if (username){
            usernames.push(username)
        }
    }
    console.log(usernames)
})

test('get all the Employee Name', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox', {name:'Username'}).fill('Admin')
    await page.getByRole('textbox', {name:'password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()

    await expect(page.getByRole('link', {name:'Admin'})).toBeVisible()

    await page.getByRole('link', {name:'Admin'}).click()

    await page.getByRole('navigation', {name:'Topbar Menu'}).getByText('User Management ').click()
    await page.getByRole('menuitem', {name:'Users'}).click()

    const rows = page.getByRole('table').getByRole('row')
    const usernames: string[] = []
    const rowcount = await rows.count()
    for(let i=1; i<rowcount; i++){
        const cell = rows.nth(i).getByRole('cell').nth(3)
        const username = await cell.textContent()
        if(username){
            usernames.push(username)
        }
    }
    console.log(usernames)
})

test('get all Amount in Record Found in the seccion Claim', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox', {name:'Username'}).fill('Admin')
    await page.getByRole('textbox', {name:'password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()

    await expect(page.getByRole('link', {name:'Claim'})).toBeVisible()
    await page.getByRole('link', {name:'Claim'}).click()

    const rows = page.getByRole('table').getByRole('row')
    const montos: number[] = []
    const rowcount = await rows.count()
    for(let i=1; i<rowcount; i++){
        const cell = rows.nth(i).getByRole('cell').nth(7)
        const monto = await cell.textContent()
        if(monto === null){
            continue;
        }
        const cambio_de_tipo = parseFloat(monto?.replace(/,/g, '').trim()) //transforma de texto a numero
        if(!Number.isNaN(cambio_de_tipo)){
            montos.push(cambio_de_tipo) //guarda los datos en el arreglo
        }
    }
    //console.log(montos.sort()) //imprime el arreglo ordenado
    console.log(montos) // imprime el arreglo normal

})

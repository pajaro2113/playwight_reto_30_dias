//practicando web scaripn
// comparamos el menu de la pagina con un menu 
import {test, expect, mergeTests} from "@playwright/test"

test('check left menu options', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox', {name:'Username'}).fill('Admin')
    await page.getByRole('textbox', {name:'password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()
    await expect(page.getByRole('link', {name:'Admin'})).toBeVisible()

    const leftMenuItems = page.getByLabel('Sidepanel').getByRole('listitem')
    const leftMenuItems_Count = await leftMenuItems.count()
    console.log('hay ',leftMenuItems_Count,' items')

    const CurrentMenuItems: string[] = []

    for (let i=0; i<leftMenuItems_Count; i++){
        const MenuTest = await leftMenuItems.nth(i).innerText()
        CurrentMenuItems.push(MenuTest)
    }
    console.log(CurrentMenuItems)
    const expectedMenuitems = [
        'Admin',       
        'PIM',
        'Leave',       
        'Time',
        'Recruitment', 
        'My Info',
        'Performance',
        'Dashboard',
        'Directory',   
        'Maintenance',
        'Claim',       
        'Buzz'];
        expect(CurrentMenuItems).toEqual(expectedMenuitems)
        
        //agregando una nueva asersion para validar que la primera opcion que aparece en el menu es Admin
        expect(CurrentMenuItems[0]).toEqual(expectedMenuitems[0])
        const valorar = CurrentMenuItems[0]
        const valorar2 = expectedMenuitems[0]
        if(valorar == valorar2){
            console.log('son exactamente iguales')
        }else{
            console.log('NO son iguales')
        }
})
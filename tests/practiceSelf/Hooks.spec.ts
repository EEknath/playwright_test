import test, { expect, Page } from '@playwright/test';
import { afterEach } from 'node:test';


/*Playwright hooks 
1.Beforeall
2.After all
3.beforeEach
4 afterEach */

/*
1.Page set as a global variable no need to set the pgae file class level 
2.W
*/


let page: Page;

test.beforeAll("Opne the application", async ({ browser }) => {

    page = await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");

})

// test.afterAll("close the application", async () => {

//     await page.close();

//     await page.waitForTimeout(5000);

// })

test.beforeEach("login functionality", async () => {

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavano1');
    await page.locator('#loginpassword').fill('test@123');
    await page.waitForTimeout(4000);
    await page.locator("//button[@onclick='logIn()']").click();

})

test.afterEach("Logout", async () => {

    console.log("*****************Logging out funactionality********************")
})



test.describe("grouping",async()=>{
    
test('Find the number of product', async () => {
    const allproduct = page.locator('#tbodyid .hrefch');
    const count = await allproduct.count();
    console.log('*******************Print the numberof product****************:', count);
});

test('Add to cart the fumctionality',async()=>{

await page.locator("//*[text()='Samsung galaxy s6']").click();

//Handlinc dialog box inside the condition with alert 

    page.on('dialog', async (dialog) => {

        expect(dialog.message()).toContain('Product added');

        await dialog.accept();

    })

    await page.locator("//*[text()='Samsung galaxy s6']").click();
    await page.waitForTimeout(5000);
    await page.locator("//a[@class='btn btn-success btn-lg']").click();


})

})

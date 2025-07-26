import test from '@playwright/test';


test('Dynamic radio button',async({page})=>{

await page.goto("https://training.rcvacademy.com/test-automation-practice-page");


const drop_down ="//input[@type='radio']";

await page.locator(drop_down).first().click()

await page.locator(drop_down).last().click()
await page.locator(drop_down).nth(3).click()


await page.waitForTimeout(5000);

})
import test from '@playwright/test'


test ("Login functionality in salesfoce application",async({page})=>{

await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("dilip@testleaf.com ");
await page.locator("#password").fill("Leaf@123");
await page.click("#Login")

await page.waitForTimeout(3000)

// storage this information for additional use
page.context().storageState({path:"UtilsFile/onstorage.json"})

})


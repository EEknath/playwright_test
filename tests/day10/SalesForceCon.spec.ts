import test from '@playwright/test'


test.use({storageState:"UtilsFile/onstorage.json"})
test("Sales force validation",async({page})=>{

await page.goto("https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");

await page.locator("//div[@class='slds-icon-waffle']").click();

console.log(page.title())
await page.waitForTimeout(4000)
await page.locator("(//p[@class='slds-truncate'])[1]").click();
await page.locator("//a[@title='Accounts']").click();

await page.waitForTimeout(4000);

})
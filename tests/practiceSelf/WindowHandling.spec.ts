import { test, expect, chromium } from '@playwright/test'



test('Window handling multiple Window', async ({ browser }) => {

    //Launch the url
    //click the install icon
    //click the share icon
    //Close the close icon
    //clos the child window

 
const context =await browser.newContext();
const page=await context.newPage();
await page.goto('https://training.rcvacademy.com/');
const [newpage]=await Promise.all([
context.waitForEvent('page'),
page.locator("(//img)[3]").click()
])

await newpage.waitForTimeout(3000),

await newpage.locator("(//*[@class='bQL56b'])[1]").waitFor({state:'visible',timeout:15000});
await newpage.locator("(//*[@class='bQL56b'])[1]").click()
await newpage.waitForTimeout(9000);
await newpage.locator("google-material-icons notranslate VfPpkd-kBDsod").click()
await newpage.waitForTimeout(4000)
await newpage.close();

})

import test from '@playwright/test'


test('Validate the Darag and Drop',async({page})=>{

await page.goto("https://demoqa.com/droppable");
await page.waitForTimeout(3000);

const Dragelement = await page.locator("//*[@id='draggable']");
const droppable= await page.locator("(//*[@class='drop-box ui-droppable'])[1]");

await page.waitForTimeout(4000);

await Dragelement.dragTo(droppable);
await page.waitForTimeout(3000);

})
import test from '@playwright/test'


test("Right click action",async({page})=>{


await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

const Right_Click=await page.locator("//*[@class='context-menu-one btn btn-neutral']");


await Right_Click.click({button:'right'});

await page.waitForTimeout(5000);


})




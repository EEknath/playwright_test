import test from '@playwright/test'


test("mouse hover",async({page})=>{
await page.goto("https://www.amazon.in/");

const mouse_hover =await page.locator("//a[@id='nav-logo-sprites']");

await mouse_hover.hover();

await page.waitForTimeout(5000);


})
import test, { expect } from '@playwright/test';



test("DoubleClick function",async ({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");

const Double_Click=await page.locator("//button[normalize-space()='Copy Text']");
await Double_Click.dblclick();
const assert =await page.locator("//input[@id='field2']")
await page.waitForTimeout(6000);
await expect.soft(assert).toHaveValue('Hello World!');
await page.waitForTimeout(6000);

})
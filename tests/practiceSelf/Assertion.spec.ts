
import {test,expect} from '@playwright/test';

test('Assertion check',async({page})=>{

await page.goto("https://www.amazon.in/");

const titleURL=await page.title();

await expect.soft(titleURL).toContain("Online Shopping site in India: Shop Online for Mobiles, Books,");


})
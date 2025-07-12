import { test} from '@playwright/test';


test('Browser launch', async ({page})=>{

await page.goto('https://www.amazon.in/'); await page.pause();



})


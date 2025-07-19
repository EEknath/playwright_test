import test from '@playwright/test'
import dotenv from 'dotenv'
import { join } from 'path'

//read multiple env file
const fileRead = process.env.envfile || 'QA' || 'Prod'


//set path of env file
dotenv.config({ path: join(__dirname,`../UtilsFile/${fileRead}.env`) })

test("Read From ENV file", async ({ page }) => {


    console.log(process.env.LT_userName)
    console.log(process.env.LT_password)


    let user = process.env.LT_username as string
    let pass = process.env.LT_password as string
    
   await page.goto("http://leaftaps.com/opentaps/control/main",{waitUntil:'domcontentloaded'})
    await page.fill("#username", user);
    await page.fill("#password", pass);
    await page.click(".decorativeSubmit");
})
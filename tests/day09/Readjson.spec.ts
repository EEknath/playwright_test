import test from '@playwright/test'
import data from '../../UtilsFile/LoginValue.json'
//To read the data from json file we are creating the below line
for (let val of data) {


     test(`json value ${val.TestCaseID}`, async ({ page }) => {
          console.log("username:" + val.username)

          await page.goto('https://login.salesforce.com/?locale=in')
          await page.fill('#username', val.username)
          await page.fill('#password', val.password)
          await page.click('#Login')

     });
}




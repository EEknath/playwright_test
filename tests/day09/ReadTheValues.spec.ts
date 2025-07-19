import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

interface LoginRecord {
    testid: string;
    username: string;
    password: string;
}

const csvPath = path.join(__dirname, '../../UtilsFile/LoginData.csv');
const fileContent = fs.readFileSync(csvPath, 'utf8');
const records: LoginRecord[] = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
    
});


for (let data_value of records) {

    test(`input from csv file ${data_value.testid}`, async ({ page }) => {
        console.log(data_value.testid)
        await page.goto("https://login.salesforce.com/?locale=in");
        await page.locator("#username").fill(data_value.username);
        await page.locator("#password").fill(data_value.password);
        await page.click("#Login");

    })
}

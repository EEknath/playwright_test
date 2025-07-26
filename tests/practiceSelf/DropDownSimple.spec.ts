import test from '@playwright/test'


test('To select the drop value', async ({ page }) => {


    await page.goto('https://www.magupdate.co.uk/reader-enquiry/pbai/245');

    await page.waitForTimeout(4000);

    const Dropdownlocation = 'select#Contact_CountryCode';

    const clos_Button = "//div[@id='cookiescript_close']";

    await page.waitForSelector(clos_Button);

    await page.locator(clos_Button).click();
    //await page.selectOption(Dropdownlocation, { index: 10 });

    //await page.selectOption(Dropdownlocation,{label:'India'}),

   const alloptions =await page.$$(Dropdownlocation +'>option');

   console.log(alloptions.length);

   for(let e of alloptions){
const text =await e.textContent();
//console.log(text);
if(text==='Uganda'){
await page.selectOption(Dropdownlocation,{label:'Uganda'});

break;

   }}


})
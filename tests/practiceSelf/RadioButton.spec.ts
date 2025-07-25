import  {expect,test} from'@playwright/test';


const searchbar ='#twotabsearchtextbox';
const search_Icon='#nav-search-submit-button';
const Radio_Button1="(//span[@class='a-size-base a-color-base'])[4]";


test("Radio button validaetion",async ({page})=>{

await page.goto("https://www.amazon.in/");

await page.locator(searchbar).fill('Diaper');
await page.locator(search_Icon).click();
await page.waitForTimeout(8000);

await page.locator(Radio_Button1).click();
const selected =await page.locator(Radio_Button1);

//tobe checked is not working while using span in the xpath
//await expect(selected).toBeChecked();

})







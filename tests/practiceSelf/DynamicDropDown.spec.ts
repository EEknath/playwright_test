import test from '@playwright/test';


test("HandleDynamic DropDown", async ({ page }) => {

    await page.goto("https://www.yatra.com/");

    await page.waitForTimeout(5000);

    //const close_Icon =await page.locator("(//*[@alt='cross'])[1]");
    const close_Icon = "(//*[@alt='cross'])[1]";

    const departure_Location = page.locator("//*[@id='input-with-icon-adornment']");

    await page.locator(close_Icon).click()
    await page.waitForTimeout(6000);
    await departure_Location.click()

    await departure_Location.pressSequentially('NEW');
    await page.locator(".viewport").getByRole("listitem").filter({hasText:'NEW YORK(JFK)'}).click()
    await page.waitForTimeout(6000);



})





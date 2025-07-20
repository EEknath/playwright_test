import test from '@playwright/test'

test("Validate the file uploading from source", async ({ page }) => {
    await page.goto("https://leafground.com/file.xhtml");
    await page.locator("//span[@class='ui-fileupload-filename']").first()
        .setInputFiles("UtilsFile/LoginData.csv")
    await page.waitForTimeout(3000)

})

test.only("Fileuploadins using evern listner",async({page})=>{



})


import test from '@playwright/test'

test("Download the file from Dom", async ({ page }) => {

    await page.goto("https://leafground.com/file.xhtml")


    const downloadPromise = page.waitForEvent('download')


    await page.getByText("Download", { exact: true }).click()
    const load = await downloadPromise


    //set path of you file
    await load.saveAs("download/" + load.suggestedFilename())


})






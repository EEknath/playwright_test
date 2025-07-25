import test from '@playwright/test'

test('screenshot view page', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({ path: 'tests/screenshotimages/' + Date.now() + 'homePage.png' })

})
test('To take the full screenshot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({ path: 'tests/screenshotimages/' + Date.now() + 'FullPageScreenshot.png', fullPage: true })

})

test.only('Take screenshot for particular element', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator("//*[@aria-label='Amazon.in']").screenshot({ path: 'tests/screenshotimages/' + Date.now() + 'ParticularElement.png' })

})






import test, { expect } from '@playwright/test'



test('Alert with Ok', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })

    page.locator("//button[@id='alertBtn']").click()


    await page.waitForTimeout(3000);
})

test('Alert with conirm', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);


    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');

        await dialog.accept();

    })
    await page.waitForTimeout(3000);

    await page.locator("//button[@id='confirmBtn']").click()


 await page.waitForTimeout(3000);

 

    test('Alert with Input', async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");

        await page.waitForTimeout(3000);

        page.on('dialog', async dialog => {

            expect(dialog.type()).toContain('prompt');
            expect(dialog.message()).toContain('Please enter your name:');

          console.log("Prompt Default Value:", dialog.defaultValue()); // Usually ''

    // Send custom input and accept
    await dialog.accept('Eknath');
        })

        await page.waitForTimeout(3000);
        await page.locator("//button[@id='promptBtn']").click();

    })



})

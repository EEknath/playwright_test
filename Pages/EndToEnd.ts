import { expect, Page, test } from "@playwright/test";

export default class LamdaTest {
    constructor(public page: Page) { }
    //click menu button
    async shopCat() {
        const shop_category = this.page.locator(
            "//a[normalize-space()='Shop by Category']"
        );
        await shop_category.click();
    }
    //selecting dropdvalue
    async getListOptionsFromDropDown() {
        const List_item = await this.page
            .locator(
                "//*[@class='navbar no-expand navbar-light bg-default vertical']"
            )
            .allTextContents();
        console.log("Print the values of dropdown", List_item);
        await this.page
            .locator("//span[normalize-space()='Software']")
            .waitFor({ state: "visible" });
        await this.page.locator("//span[normalize-space()='Software']").click();
    }
    //selecting mntc type
    async clickIphneManufacturee() {
        const manufacturer = this.page.locator("//label[@for='mz-fm-0-8']");
        await manufacturer.click();
    }

    //instock button
    async clickAvilability() {
        //    this.page.getByRole('checkbox', { name: 'In stock' }).scrollIntoViewIfNeeded();
        //    this.page.getByRole('checkbox', { name: 'In stock' }).click();
        //expect(await checkbox.isChecked()).toBe(true);

        await this.page
            .locator("//label[@for='mz-fss-0--1']")
            .scrollIntoViewIfNeeded();
        await this.page.locator("//label[@for='mz-fss-0--1']").click();
        expect(
            await this.page.locator("//label[@for='mz-fss-0--1']").isChecked()
        ).toBe(true);
    }
    //select the nano product
    async selectProductNano() {
        await this.page.hover(
            "//a[@id='mz-product-grid-image-36-212408']//div[@class='carousel-item active']//img[@title='iPod Nano']"
        );
        await this.page.locator(
            "//button[@class='btn btn-cart cart-36']//i[@class='fas fa-shopping-cart']"
        ).click;
        //await hover_product.click
    }

    //after the product close icon
    async closePopUpMessage() {
        const close_icon = this.page.locator("//span[@aria-hidden='true']");
        await close_icon.click();
    }

    // validate cart button
    async clickCartButton() {
        const Cart_Button = this.page.locator("(//div[@class='cart-icon'])[1]");
        await Cart_Button.click();
    }

    // click checkout button

    async clickCheckOutButton() {
        const Checkout_button = await this.page.locator(
            "//a[normalize-space()='Checkout'] "
        );
        await Checkout_button.click();
    }

    async enterfirstName(name: string) {
        await this.page.locator("#firstname").fill(name);
    }

    async enterLastName(name: string) {
        await this.page.getByPlaceholder("#Last Name").fill(name);
    }

    async emailAddress(email: string) {
        await this.page.locator("#email").fill(email);
    }

    async enterPhoneNumber(number: string) {
        await this.page
            .locator("//input[@id='input-payment-telephone']")
            .fill(number);
    }

    async enterPassWord(number: string) {
        await this.page.locator("#password").fill(number);
    }

    async enterConfirmPassword(number: string) {
        await this.page.locator("#confirm").fill(number);
    }


    async enterAdressOne(name: string) {

        await this.page.locator("#address_1").fill(name);

    }

    async enterCity(city: string) {
        await this.page.locator("//input[@id='input-payment-city']").fill(city);
    }

    async enterPostalCode(name: string) {

        await this.page.locator("#postcode").fill(name)
    }

    async chosseCountry() {

        this.page.locator('#country_id').selectOption('India');
    }
    async choosState() {

        this.page.locator('#zone_id').selectOption('Tamil Nadu');
    }

    async commentsEnter(input: string) {

        await this.page.locator("#comment").fill(input)
    }

    async checkBoxOne() {

        const check_Box = this.page.locator("//label[@for='input-account-agree']")
        await check_Box.click();
    }
    async checkBoxTwo() {
        const check_Boxtwo = this.page.locator("//label[@for='input-agree']")
        await check_Boxtwo.click()

    }

    async finalSubmitButton() {

        const submit = this.page.locator("//button[@id='button-save']")
        await submit.click();
    }

    async chooseExistingAddress() {

        const existing_address = this.page.locator("//*[@for='input-payment-address-existing']")
        await existing_address.click();
    }



    async finalContinueButton() {

        await this.page.getByRole('button', { name: 'Submit' }).click();

    }
}
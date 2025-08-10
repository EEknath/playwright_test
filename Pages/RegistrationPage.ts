import { expect, test } from "@playwright/test";
import { Page } from "@playwright/test";

export default class Registartion {
    constructor(public page: Page) { }

    async clickRegistrationLink() {
        await this.page.getByRole('link', { name: 'Register' }).click();

    }

    async gefirstName(fname: string) {
        const firstname = this.page.getByPlaceholder("First Name");
        await firstname.fill(fname);
    }

    async getLastName(Lname: string) {
        const lastnmae = this.page.locator("#input-lastname");
        await lastnmae.fill(Lname);
    }

    async getEmailId(email: string) {
        const Register_email = this.page.locator("#input-email");
        await Register_email.fill(email);
    }

    async getTelePhoneNumber(number: string) {
        const Telephone = this.page.locator("#input-telephone");
        await Telephone.fill(number);
    }

    async getPassWord(numberPass: string) {
        const Pass_Word = this.page.locator("#input-password")
        await Pass_Word.fill(numberPass);
    }
    async getConfirmPass(numberConfirm: string) {
        const confirm_Password = this.page.locator("#input-confirm");
        await confirm_Password.fill(numberConfirm);
    }

    async getRadioButton() {
        const Radio_Button = this.page.locator("(//*[@checked='checked'])[2]")
        await expect(Radio_Button).toBeChecked();
    }

    async getPrivactconfirmationButton() {
        const privacy_check = this.page.locator("//*[text()='I have read and agree to the ']")
        await privacy_check.click();
    }


    async getcontinueButton() {
        const submit_Button = this.page.locator("//*[@class='btn btn-primary']")
        await submit_Button.click();
    }
}
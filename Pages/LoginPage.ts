import { Page } from "@playwright/test";
import { test } from "@playwright/test";

export default class LoginPage {
    constructor(public page: Page) { }

    async mouseHoverMyaccount() {
        const mouse = await this.page.getByRole("button", { name: "My account" });
        await mouse.hover();
    }

    async clickLoginButton() {
        const login_button = await this.page.getByText("Login");
        await login_button.click();
    }
    async clickRegisterButton() {
        const Register_element = this.page.getByText("Register");
        await Register_element.click();
    }

    async enterUserName(email: string) {
        const email_id = await this.page.locator("#input-email");
        await email_id.fill(email);
    }

    async enterPassWord(pass: string) {
        const Password_pass = this.page.locator("#input-password");
        await Password_pass.fill(pass);
    }

    async clickLogin() {
        const Login = this.page.locator("//input[@type='submit']");
        await Login.click();
    }
}
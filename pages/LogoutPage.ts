import { Page, Locator } from "@playwright/test";

export class LogoutPage {

    private readonly page: Page
    private readonly accountlogoutmessage: Locator


    private readonly continuebuttontogohome: Locator

    private readonly btnContinue: Locator;





    constructor(page: Page) {

        this.page = page
        this.accountlogoutmessage = page.getByRole('heading', { name: 'Account Logout' })
        this.continuebuttontogohome = page.getByRole('link', { name: 'Continue' })
        this.btnContinue = page.locator('.btn.btn-primary');
    }




    async isUserlogout(): Promise<string> {

        return await this.accountlogoutmessage.innerText()

    }


    async NavigatetoHomepage() {

        await this.continuebuttontogohome.click()





    }

    async accounlogouttitle(): Promise<string> {

        return await this.page.title()
    }


    async isContinueButtonVisible(): Promise<boolean> {
        return await this.btnContinue.isVisible();
    }
}
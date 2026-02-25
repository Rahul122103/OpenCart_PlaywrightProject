import { Page, Locator } from "@playwright/test";


export class HomePage {

  private readonly page: Page
  private readonly myaccountdropdown: Locator

  private readonly registerlink: Locator
  private readonly loginlink: Locator

  private readonly searchbox: Locator
  private readonly searchbutton: Locator




  constructor(page: Page) {

    this.page = page
    this.myaccountdropdown = page.locator("ul[class='list-inline']  li.dropdown")

    this.registerlink = page.getByRole('link', { name: 'Register' })

    this.loginlink = page.getByRole('link', { name: 'Login' })
    this.searchbox = page.getByRole('textbox', { name: 'Search' })
    this.searchbutton = page.locator('button.btn.btn-default.btn-lg')


  }


  async myaccountdropdownclick() {

    await this.myaccountdropdown.click()



  }


  async registerclick() {
    await this.registerlink.click()
  }


  async clickOnLogin() {

    await this.loginlink.click()


  }


  async eneterProductName(pname: string) {

    await this.searchbox.fill(pname)


  }

  async clickonSearchButton() {

    await this.searchbutton.click()

  }

}
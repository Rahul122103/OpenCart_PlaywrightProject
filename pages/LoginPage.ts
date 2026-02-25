import { Page, Locator } from "@playwright/test"



export class LoginPage {

  private readonly page: Page

  private readonly emailaddress: Locator

  private readonly password: Locator

  private readonly loginButton: Locator

  //  private readonly myaccountmessage:Locator

  private readonly errormsg: Locator





  constructor(page: Page) {


    this.page = page
    this.emailaddress = page.getByRole('textbox', { name: 'E-Mail Address' })
    this.password = page.getByRole('textbox', { name: 'Password' })
    this.loginButton = page.locator('input.btn.btn-primary')

    this.errormsg = page.locator("div .alert")

    //  this.myaccountmessage=page.locator("h2:nth-child(1)")


  }


  async entervaliddetails(email: string, passoword: string) {


    await this.emailaddress.fill(email)

    await this.password.fill(passoword)
  }

  async clickOnloginButton() {

    await this.loginButton.click()


  }



  // for using expect condition 
  async inavalidcredential() {

    return await this.errormsg.textContent()
  }













}
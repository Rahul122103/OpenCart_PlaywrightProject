import { Page, Locator } from "@playwright/test";




export class RegisterationPage{

    private readonly  page: Page
    private readonly  firstName: Locator
    private readonly  lastName: Locator
    private readonly email: Locator
    private readonly telephone: Locator
    private readonly password: Locator
    
    private readonly confirmPassword: Locator
    
    private readonly subscribeYesradiobutton: Locator
    private readonly subsribeNoradiobutton: Locator
    private readonly privacypolicycheckbox: Locator
    
    private readonly continuebutton: Locator
      private readonly   successmessage:Locator
    


    constructor(page: Page) {
        this.page = page
        this.firstName = page.getByRole('textbox', { name: 'First Name' })
        this.lastName = page.getByRole('textbox', { name: 'Last Name' })
        this.email = page.getByRole('textbox', { name: 'E-Mail' })
        this.telephone = page.getByRole('textbox', { name: 'Telephone' })
        this.password = page.getByLabel('Password', { exact: true })
        this.confirmPassword = page.getByRole('textbox', { name: 'Password Confirm' })
        
        this.subscribeYesradiobutton = page.getByLabel('Yes', { exact: true })
        this.subsribeNoradiobutton = page.getByLabel('No', { exact: true })
        
        this.privacypolicycheckbox = page.locator('[name="agree"]')
        this.continuebutton = page.locator('input.btn.btn-primary')
        
        this.successmessage = page.getByRole('heading', { name: 'Your Account Has Been Created!' })


    }


   async fillPersonalDetails(firstName:string,lastName:string,email:string,telephone:string
   ) {
       await this.firstName.fill(firstName)
       await this.lastName.fill(lastName)
       await this.email.fill(email)
        await this.telephone.fill(telephone)
        
    }

    async fillPassowrddetails(password:string,confirmPassword:string) {
      
        await this.password.fill(password)
        await this.confirmPassword.fill(confirmPassword)
        

        
    }


  async   subscribeNoclick() {
        await this.subsribeNoradiobutton.click()
    }

    async   subscribeYesclick() {
        await this.subscribeYesradiobutton.click()
    }


  async  clickPrivacyPolicy() {
        await this.privacypolicycheckbox.click()
    }
    

   async clickContinuebutton() {
        await this.continuebutton.click()
    }


    async isUserRegisterd() {
       
        return await this.successmessage.innerText()
        
    }

    


}
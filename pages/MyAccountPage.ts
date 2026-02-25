import { Page, Locator } from "@playwright/test";


export class MyAccountPage{

    private readonly  page: Page
    
    private readonly myaccountmessage: Locator

    private readonly myaccountlogout:Locator
    


    constructor(page: Page) {
        

     this.page = page
        this.myaccountmessage = page.locator("h2:nth-child(1)")
        this.myaccountlogout= page.locator('a').filter({ hasText: 'Logout' }).last()
        

    }


    async isUserloggedIn() {
       
     return await this.myaccountmessage.innerText()
        
    }


   async clickOnlogout() {
        
       
      await this.myaccountlogout.click()
    }


}






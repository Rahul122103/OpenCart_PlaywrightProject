import { LoginPage } from "../pages/LoginPage";
import { test, expect } from '@playwright/test'

import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { dataProvider } from "../utils/dataProvider";





let config: TestConfig
let homePage: HomePage
let loginpage: LoginPage
let myaccountpage: MyAccountPage

// get the data from utils dataprovider

//1st give file path

const filepath: string = "testdata/logindata.json"

const jsondata = dataProvider.gettestdatajson(filepath)



for (let data of jsondata) {










    test.beforeEach(async ({ page }) => {

        // appurl prest in test.config.ts , here global test data is present
        config = new TestConfig()

        await page.goto(config.appUrl)

        homePage = new HomePage(page) // HomePage

        loginpage = new LoginPage(page)
        myaccountpage = new MyAccountPage(page)



    })

    test(` json data Verify login data  with ${data.testName} `, async ({ page }) => {

        await homePage.myaccountdropdownclick()
        await homePage.clickOnLogin()

        await loginpage.entervaliddetails(data.email, data.password)

        await loginpage.clickOnloginButton()


        if (data.expected.toLowerCase() == 'success') {


            const logoutmsg = await myaccountpage.isUserloggedIn()

            expect(logoutmsg).toContain("My Account")

            await page.waitForTimeout(2000)

        }

        else {

            const errormsg = await loginpage.inavalidcredential()
            expect(errormsg?.trim()).toContain(' Warning: No match for E-Mail Address and/or Password.'.trim())
        }








    })

}


const filepathcsv: string = "testdata\logindata.csv"

const jsondatacsv = dataProvider.gettestdatajson(filepath)

for (let data of jsondatacsv) {










    test.beforeEach(async ({ page }) => {

        // appurl prest in test.config.ts , here global test data is present
        config = new TestConfig()

        await page.goto(config.appUrl)

        homePage = new HomePage(page) // HomePage

        loginpage = new LoginPage(page)
        myaccountpage = new MyAccountPage(page)



    })

    test(` csv data Verify login data  with ${data.testName} `, async ({ page }) => {

        await homePage.myaccountdropdownclick()
        await homePage.clickOnLogin()

        await loginpage.entervaliddetails(data.email, data.password)

        await loginpage.clickOnloginButton()


        if (data.expected.toLowerCase() == 'success') {


            const logoutmsg = await myaccountpage.isUserloggedIn()

            expect(logoutmsg).toContain("My Account")

            await page.waitForTimeout(2000)

        }

        else {

            const errormsg = await loginpage.inavalidcredential()
            expect(errormsg?.trim()).toContain(errormsg?.trim())
        }








    })

}

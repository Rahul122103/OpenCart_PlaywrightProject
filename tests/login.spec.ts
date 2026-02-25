import { LoginPage } from "../pages/LoginPage";
import { test, expect } from '@playwright/test'

import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/MyAccountPage";





let config: TestConfig
let homePage: HomePage
let loginpage: LoginPage
let myaccountpage: MyAccountPage

test.beforeEach(async ({ page }) => {

  // appurl prest in test.config.ts , here global test data is present
  config = new TestConfig()

  await page.goto(config.appUrl)

  homePage = new HomePage(page) // HomePage

  loginpage = new LoginPage(page)
  myaccountpage = new MyAccountPage(page)



})

test("Verify valid login data  @smoke", async ({ page }) => {

  await homePage.myaccountdropdownclick()
  await homePage.clickOnLogin()

  await loginpage.entervaliddetails(config.email, config.password)

  await loginpage.clickOnloginButton()


  const logoutmsg = await myaccountpage.isUserloggedIn()

  expect(logoutmsg).toContain("My Account")

  await page.waitForTimeout(5000)










})

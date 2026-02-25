import { LoginPage } from "../pages/LoginPage";
import { test, expect } from '@playwright/test'

import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/MyAccountPage";

import { LogoutPage } from '../pages/LogoutPage'





let config: TestConfig
let homePage: HomePage
let loginpage: LoginPage
let myaccountpage: MyAccountPage
let logoutpage: LogoutPage

test.beforeEach(async ({ page }) => {

  // appurl prest in test.config.ts , here global test data is present
  config = new TestConfig()

  await page.goto(config.appUrl)

  homePage = new HomePage(page) // HomePage

  loginpage = new LoginPage(page)
  myaccountpage = new MyAccountPage(page)
  logoutpage = new LogoutPage(page)



})

test("Verify valid login data  @smoke", async ({ page }) => {

  await homePage.myaccountdropdownclick()
  await homePage.clickOnLogin()

  await loginpage.entervaliddetails(config.email, config.password)

  await loginpage.clickOnloginButton()


  const logoutmsg = await myaccountpage.isUserloggedIn()

  expect(logoutmsg).toContain("My Account")

  await page.waitForTimeout(5000)


  await myaccountpage.clickOnlogout()

  const myaccounttext = await logoutpage.isUserlogout()
  expect(myaccounttext).toContain("Account Logout")



  const logouttitletxt = await logoutpage.accounlogouttitle()

  expect(logouttitletxt).toContain('Account Logout')


  expect(await logoutpage.isContinueButtonVisible()).toBeTruthy()


  await page.waitForTimeout(3000)













})

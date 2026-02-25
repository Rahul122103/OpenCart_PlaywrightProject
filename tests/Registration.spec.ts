import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterationPage } from "../pages/RegistrationPage";
import { TestConfig } from "../test.config";

import { randomdatafaker } from "../utils/radomdatafaker"



let config: TestConfig
let homePage: HomePage
let registerationPage: RegisterationPage
test.beforeEach(async ({ page }) => {

  // appurl prest in test.config.ts , here global test data is present
  config = new TestConfig()

  await page.goto(config.appUrl)

  homePage = new HomePage(page) // HomePage

  registerationPage = new RegisterationPage(page)

})





test("User registration with randomdata", async ({ page }) => {










  await homePage.myaccountdropdownclick()

  await homePage.registerclick()



  // Registationpage





  // now enetr the dummy data use faker library present in Utils
  // randomdatafeker is static class , thats why new keyword is not used 

  await registerationPage.fillPersonalDetails(
    randomdatafaker.getfirtsname(),
    randomdatafaker.getlastName(),
    randomdatafaker.getEmail(),
    randomdatafaker.getPhoneNumber()
  )

  //  same password so we use passoword in a variable and use in password and confirm password

  const password = randomdatafaker.getPassword()

  await registerationPage.fillPassowrddetails(password, password)


  await registerationPage.clickPrivacyPolicy()

  await registerationPage.clickContinuebutton()

  const msg = await registerationPage.isUserRegisterd()

  expect(msg).toContain("Your Account Has Been Created!")






})
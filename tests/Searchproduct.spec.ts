import { test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { SearchPage } from "../pages/SearchPage";
import { HomePage } from "../pages/HomePage";






let config: TestConfig
let homePage: HomePage
let seachpage: SearchPage

test.beforeEach(({ page }) => {

    config = new TestConfig()

    page.goto(config.appUrl)

    homePage = new HomePage(page)
    seachpage = new SearchPage(page)



})


test("Verify search", async ({ page }) => {

    await homePage.eneterProductName(config.productName)

    await homePage.clickonSearchButton()


    expect(await seachpage.isPageexist()).toBeTruthy()


    expect(await seachpage.isProductexist(config.productName)).toBeTruthy()


    await page.waitForTimeout(2000)








})
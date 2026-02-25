import { Locator, Page, expect } from "@playwright/test";


export class SearchPage {


    page: Page

    searchHeader: Locator

    searchProduct: Locator


    constructor(page: Page) {

        this.page = page
        this.searchHeader = page.locator("#content h1")
        this.searchProduct = page.locator("div h4>a")

    }


    async isPageexist() {
        const searchheade = await this.searchHeader.innerText()

        if (searchheade.includes('Search -')) {
            return true
        }

        return false;
    }


    async isProductexist(productname: string) {

        const allproduct = await this.searchProduct.all()

        for (let product of allproduct) {

            const productext = await product.innerText()

            if (productext === productname) {

                return true
            }
        }

        return false


    }

}
let {element,by,browser,ExpectedConditions, Key} = require("protractor");
let BasePage = require("./BasePage");
let LanguageChanger = require("../fragments/LanguageChanger");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.dropdownButton =
        this.LosAngelesDropdown = element(by.id("select2-new_form_job_search_1445745853_copy-location-result-uzl3-Los Angeles, CA"));
        this.searchButton = element(by.className("recruiting-search__submit"));
        this.searchFieldSelector = "//*[@id=\"new_form_job_search_1445745853_copy-keyword\"]"
        this.searchResultSelector = "//*[@id=\"main\"]/div[1]/div[1]/section/div/div[1]/div/section"
    }

    async selectLosAngeles(){
        //await browser.wait(ExpectedConditions.elementToBeClickable(this.LosAngelesDropdown),10000);
        this.LosAngelesDropdown.click();
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }

    async searchJob(string){
        await element(by.xpath(this.searchFieldSelector)).sendKeys(string, Key.ENTER);
        await new Promise(r => setTimeout(r, 4000));
    }

    async findSearchResultBlock(){
        return element(by.xpath(this.searchResultSelector)).isPresent();
    }

}

module.exports = CareersPage;
let {element,by,browser,ExpectedConditions, Key} = require("protractor");
let BasePage = require("./BasePage");
let LanguageChanger = require("../fragments/LanguageChanger");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.searchButton = element(by.className("recruiting-search__submit"));
        this.searchFieldSelector = by.xpath("//*[@id=\"new_form_job_search_1445745853_copy-keyword\"]");
        this.searchResultSelector = by.xpath("//*[@id=\"main\"]/div[1]/div[1]/section/div/div[1]/div/section");
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }

    async searchJob(string){
        await element(this.searchFieldSelector).sendKeys(string, Key.ENTER);
        await new Promise(r => setTimeout(r, 4000));
    }

    async findSearchResultBlock(){
        return element(this.searchResultSelector).isPresent();
    }

}

module.exports = CareersPage;
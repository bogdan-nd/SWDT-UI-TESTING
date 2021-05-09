let {element,by} = require("protractor");
let BasePage = require("./BasePage");
let LanguageChanger = require("../fragments/LanguageChanger");

class MainPage extends BasePage {
    constructor() {
        super();
        this.locationButton = element(by.className("location-selector__button"));
        this.languageChanger = new LanguageChanger(element(by.css(".location-selector-ui.header__control")));
        this.insightsButton = element(by.cssContainingText(".top-navigation__item-link","Insights"));
    }

    async clickLocation(){
        await this.locationButton.click();
    }

    async chooseUkrainian(){
        await this.languageChanger.selectUkrainian();
    }

    async clickInsightsButton(){
        await this.insightsButton.click();
    }
}

module.exports = MainPage;

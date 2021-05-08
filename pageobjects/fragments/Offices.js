let {element, by, browser, ExpectedConditions} = require("protractor");
let {BaseFragment} = require("protractor-element-extend");

class Offices extends BaseFragment {
    constructor(rootElement) {
        super(rootElement);
        this.countryListSelector = ".tabs__item.active .locations-viewer__country-name";
    }

    async changeRegion(region) {
        browser.navigate().refresh();
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.css(".button-ui.bg-color-light-blue.cookie-disclaimer__button"))),10000);
        let element_ = element(by.css(".button-ui.bg-color-light-blue.cookie-disclaimer__button"));
        await element_.click();
        let button = element(by.cssContainingText(".tabs__link.js-tabs-link",region));
        await button.click();
    }

    async getCountryList(){
        let countries = element.all(by.css(this.countryListSelector));

        return await countries.map((element_,index) => element_.getText());
    }
}

module.exports = Offices;
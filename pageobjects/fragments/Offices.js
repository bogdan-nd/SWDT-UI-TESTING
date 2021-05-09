let {element, by, browser, ExpectedConditions} = require("protractor");
let {BaseFragment} = require("protractor-element-extend");

class Offices extends BaseFragment {
    constructor(rootElement) {
        super(rootElement);
        this.rootElement = rootElement;
        this.tabSelector = by.css(".tabs__item.active");
        this.countrySelector = by.css(".locations-viewer__country-btn");
        this.nextCountryButtonSelector = by.css(".owl-next");
    }

    async changeRegion(region) {
        browser.actions().mouseMove(this.rootElement).perform();
        await browser.wait(ExpectedConditions.textToBePresentInElement(element(by.partialLinkText(region)), region), 10000);
        let regionButton = element(by.partialLinkText(region));
        await browser.actions().click(regionButton).perform();
    }

    async getCountryList() {
        let tab = element(this.tabSelector);
        let countries = [];
        let nextCountryButton = await tab.element(this.nextCountryButtonSelector);
        let currentCountries;
        let checker = (arr, target) => target.every(el => arr.includes(el));

        while (true) {
            let current_countries_list = await tab.all(this.countrySelector).map(el => el.getText().then(text => text));
            currentCountries = current_countries_list.filter(title => title !== "");
            if (checker(countries, currentCountries))
                break;

            currentCountries.map(el => countries.push(el));
            for (let i = 0; i < currentCountries.length; i++) {
                await browser.actions().click(nextCountryButton).perform();
            }
        }
        return countries;
    }
}

module.exports = Offices;
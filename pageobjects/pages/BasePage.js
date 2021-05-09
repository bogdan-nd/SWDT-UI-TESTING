let {browser,element,ExpectedConditions} = require("protractor");

class BasePage {
    constructor() {
        this.cookieButtonSelector = by.css(".button-ui.bg-color-light-blue.cookie-disclaimer__button");
    }

    async openPage(url) {
        return await browser.get(url).then(title => title);
    }

    async getTitle() {
        browser.sleep(1000);
        return await browser.getTitle().then(title => title);
    }

    async acceptCookies() {
        try {
            await browser.wait(ExpectedConditions.elementToBeClickable(element(this.cookieButtonSelector)), 5000);
            let element_ = element(this.cookieButtonSelector);
            await element_.click();
        } catch (e) {
        }
    }
}

module.exports = BasePage;
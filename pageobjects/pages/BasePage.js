let {browser,element,ExpectedConditions} = require("protractor");

class BasePage {
    constructor() {
        this.cookieButtonSelector = ".button-ui.bg-color-light-blue.cookie-disclaimer__button";
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
            await browser.wait(ExpectedConditions.elementToBeClickable(element(by.css(this.cookieButtonSelector))), 5000);
            let element_ = element(by.css(this.cookieButtonSelector));
            await element_.click();
        } catch (e) {
        }
    }
}

module.exports = BasePage;
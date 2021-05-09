let {element, by, browser, ExpectedConditions} = require("protractor");
let {BaseFragment} = require("protractor-element-extend");

class LanguageChanger extends BaseFragment {
    constructor(rootElement) {
        super(rootElement);
    }

    async selectUkrainian(){
        this.languageLinks = element.all(by.xpath("//a[text()='Ukraine ']")).get(0);
        await browser.wait(ExpectedConditions.elementToBeClickable(this.languageLinks),5000);
        this.languageLinks.click();
    }
}

module.exports = LanguageChanger;
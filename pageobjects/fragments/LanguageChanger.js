let {element, by, browser, ExpectedConditions} = require("protractor");
let {BaseFragment} = require("protractor-element-extend");

class LanguageChanger extends BaseFragment {
    constructor(rootElement) {
        super(rootElement);
        this.languageLinksSelector = by.xpath("//a[text()='Ukraine ']");
    }

    async selectUkrainian(){
        this.languageLinks = element.all(this.languageLinksSelector).get(0);
        await browser.wait(ExpectedConditions.elementToBeClickable(this.languageLinks),5000);
        this.languageLinks.click();
    }
}

module.exports = LanguageChanger;
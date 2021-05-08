let {browser} = require("protractor");

class BasePage {
    constructor() {
    }

    openPage(url) {
        return browser.get(url).then(page => page);
    }

    getTitle() {
        return browser.getTitle().then(title => title);
    }
}

module.exports = BasePage;
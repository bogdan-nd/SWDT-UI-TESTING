let {Then, When, Given} = require('@cucumber/cucumber');
let AboutPage = require("../pageobjects/pages/AboutPage")
let {browser} = require("protractor");
let chai = require("chai")
let chaiAsPromised = require("chai-as-promised")

chai.use(chaiAsPromised);
let expect = chai.expect;
let page;

Given(/^User has opened About page at EPAM's website$/,{timeout: 2 * 5000}, async() => {
    page = new AboutPage();
    await browser.get("https://www.epam.com/about");
});

Given(/^I open CIS offices$/,{timeout: 100 * 1000}, async () => {
    await page.changeRegion("CIS");
});

let countryList;

When(/^I swipe the list of the countries$/, async () => {
    countryList = await page.getCountryList();

});

Then(/^I shouldn't see Ukraine in this list\.$/, function () {
    expect(countryList.includes("Ukraine")).to.equal(false);
});

Given(/^I open offices, that are located in Europe$/,{timeout: 1000 * 1000}, async () => {
    countryList = await page.changeRegion("Europe");
});

Then(/^I should see Ukraine in this list\.$/, function () {
    expect(countryList.includes("Ukraine")).to.equal(false);
});
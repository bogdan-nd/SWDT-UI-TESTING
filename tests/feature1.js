let {Then, When, Given} = require('@cucumber/cucumber');
let AboutPage = require("../pageobjects/pages/AboutPage")
let {browser} = require("protractor");
let chai = require("chai")
let chaiAsPromised = require("chai-as-promised")

chai.use(chaiAsPromised);
let expect = chai.expect;
let page;

Given(/^User has opened About page at EPAM's website$/,{timeout: 20000}, async() => {
    page = new AboutPage();
    await browser.get("https://www.epam.com/about");
    await page.acceptCookies();
});

Given(/^I open CIS offices$/,{timeout: 20000}, async () => {
    await page.changeRegion("CIS");
});

let countryList;

When(/^I swipe the list of the countries$/,{timeout: 30000}, async () => {
    countryList = await page.getCountryList();
});

Then(/^I shouldn't see Ukraine in this list\.$/, function () {
    expect(countryList.includes("UKRAINE")).to.equal(false);
});

Given(/^I open offices, that are located in Europe$/,{timeout: 10000}, async () => {
    await page.changeRegion("EUROPE");
});

Then(/^I should see Ukraine in this list\.$/,{timeout: 10000}, function () {
    expect(countryList.includes("UKRAINE")).to.equal(true);
});
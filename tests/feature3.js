let {Then, When, Given} = require('@cucumber/cucumber');
let MainPage = require("../pageobjects/pages/MainPage")
let {browser} = require("protractor");
let chai = require("chai")
let chaiAsPromised = require("chai-as-promised")

chai.use(chaiAsPromised);
let expect = chai.expect;
let page;

Given(/^I have opened the main page$/, {timeout: 10000}, async () =>{
    page = new MainPage();
    await page.openPage("https://www.epam.com");
    await page.acceptCookies();
});

When(/^I click on language selection button$/, {timeout: 10000}, async() => {
    await page.clickLocation();
});

When(/^I choose Ukrainian$/, {timeout: 10000}, async () => {
    await page.chooseUkrainian();
});

Then(/^I see main page on Ukrainian$/,{timeout: 10000}, async () => {
    let new_title = await page.getTitle();
    expect(new_title).to.equal("EPAM Ukraine - найбільша ІТ-компанія в Україні | Вакансії");
});

When(/^I clicks Insights page$/,{timeout: 10000}, async () => {
    await page.clickInsightsButton();
});

Then(/^Insights page opens$/, {timeout: 10000},async () =>{
    let new_title = await page.getTitle();
    expect(new_title).to.equal("Discover our Latest Insights | EPAM");
});
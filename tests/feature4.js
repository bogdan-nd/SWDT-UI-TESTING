let {Then, When, Given} = require('@cucumber/cucumber');
let CareersPage = require("../pageobjects/pages/CareersPage")
let {browser} = require("protractor");

let chai = require("chai")
let chaiAsPromised = require("chai-as-promised")

chai.use(chaiAsPromised);
let expect = chai.expect;
let page;


Given(/^user have opened Careers page$/,{timeout: 10000}, async () => {
    page = new CareersPage();
    await page.openPage("https://www.epam.com/careers");
    await page.acceptCookies();
});

Given(/^I have selected Los Angeles, CA as Location$/,{timeout: 10000},  async () => {
    await page.selectLosAngeles();
});

Given(/^I have typed React keyword$/, {timeout: 10000}, async () =>{
    await page.searchJob("react");
});

When(/^I clicks Find button$/,{timeout: 10000},  async () =>{
    await page.clickSearchButton();
});
Then(/^I should see offers\.$/,{timeout: 10000},  async () => {
    let exists = await page.findSearchResultBlock();
    expect(exists).to.equal(true);
});
Given(/^I have cleared keyword input\.$/,{timeout: 10000}, async () => {
    await page.searchJob("");
});
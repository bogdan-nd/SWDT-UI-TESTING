let {Then, When, Given} = require('@cucumber/cucumber');
let ContactUsPage = require("../pageobjects/pages/ContactUsPage")
let {browser} = require("protractor");
let chai = require("chai")
let chaiAsPromised = require("chai-as-promised")

chai.use(chaiAsPromised);
let expect = chai.expect;
let page;

Given(/^User has opened Contact Us page at EPAM's website$/, {timeout: 10000}, async () => {
    page = new ContactUsPage();
    await browser.get("https://www.epam.com/about/who-we-are/contact");
    await page.acceptCookies();
});

Given(/^there are uncompleted (.*) field in the form$/, {timeout: 10000},async(arg) => {
    await page.clearField(arg);
});

When(/^I clicks Submit button$/,{timeout: 10000}, async() => {
    await page.submitForm();
});

Then(/^(.*) field's border color becomes red colored$/,{timeout: 10000}, async (arg) => {
    let borderColor = await page.getFieldBorderColor(arg);
    expect(borderColor.toString()).to.equal("rgb(241, 92, 67)");
});

Given(/^there are unchecked I consent my personal information tick$/,{timeout: 10000}, async () => {
    await page.unCheckedTick();
});

Then(/^I consent my personal information tick's border becomes Red colored$/,{timeout: 10000}, async () => {
    let borderColor = await page.getTickerBorderColor();
    expect(borderColor.toString()).to.equal("rgb(0, 0, 0)");
});
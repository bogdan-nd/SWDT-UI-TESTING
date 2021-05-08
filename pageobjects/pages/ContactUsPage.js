let {element,by,browser} = require("protractor");
let BasePage = require("./BasePage");
let Offices = require("../fragments/Offices");
let ContactUsForm = require("../fragments/ContactUsForm");

class ContactUsPage extends BasePage {
    constructor() {
        super();
        this.contactUsForm = new ContactUsForm(element(by.css(".layout-box__mobile.bg-color-smoke-gray")));
        this.submitButton = element(by.className('button-ui'));
    }

    async clearField(field){
        await this.contactUsForm.clearField(field);
    }

    async submitForm(){
        await this.submitButton.click();
    }

    async getFieldBorderColor(field){
        return await this.contactUsForm.getBorderColor(field);
    }

    async unCheckedTick(){
         await this.contactUsForm.unCheckedTick();
    }

    async getTickerBorderColor(){
        return this.contactUsForm.getTickBorder();
    }
}

module.exports = ContactUsPage;
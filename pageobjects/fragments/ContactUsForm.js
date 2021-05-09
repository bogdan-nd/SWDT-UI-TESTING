let {element, by, browser, ExpectedConditions} = require("protractor");
let {BaseFragment} = require("protractor-element-extend");

class ContactUsForm extends BaseFragment {
    constructor(rootElement) {
        super(rootElement);
        this.nameFieldSelector = by.id("_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name");
        this.surnameFieldSelector = by.id("_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name");
        this.emailFieldSelector = by.id("_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email");
        this.phoneFieldSelector = by.id("_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone");
        this.tickSelector = by.id("new_form_gdprConsent");
        
        this.nameField = this.element(this.nameFieldSelector);
        this.surnameField = this.element(this.surnameFieldSelector);
        this.emailField = this.element(this.emailFieldSelector);
        this.phoneField = this.element(this.phoneFieldSelector);
        this.tick = this.element(this.tickSelector);

        this.fieldByName = {"FIRST NAME":this.nameField, "LAST NAME":this.surnameField, "EMAIL":this.emailField, "PHONE":this.phoneField}
    }

    async getBorderColor(fieldName){
        let input = this.fieldByName[fieldName];
        return input.getCssValue("border-color");
    }

    async clearField(fieldName){
        let input = this.fieldByName[fieldName];
        input.click().clear().sendKeys("");
    }

    async unCheckedTick(){
        let isTickChecked = await this.tick.getCssValue("aria-invalid");
        console.log(isTickChecked);
        if(!isTickChecked)
            browser.actions().click(this.tick).perform();
    }

    async getTickBorder(){
        return this.tick.getCssValue("border-color");
    }
}

module.exports = ContactUsForm;
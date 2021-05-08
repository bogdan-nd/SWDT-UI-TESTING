let {element, by, browser, ExpectedConditions} = require("protractor");
let {BaseFragment} = require("protractor-element-extend");

class ContactUsForm extends BaseFragment {
    constructor(rootElement) {
        super(rootElement);
        this.nameFieldSelector = "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name";
        this.surnameFieldSelector = "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name";
        this.emailFieldSelector = "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email";
        this.phoneFieldSelector = "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone";
        this.locationFieldSelector = "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_country-error";
        this.tickSelector = "new_form_gdprConsent";
        this.nameField = this.element(by.id(this.nameFieldSelector));
        this.surnameField = this.element(by.id(this.surnameFieldSelector));
        this.emailField = this.element(by.id(this.emailFieldSelector));
        this.phoneField = this.element(by.id(this.phoneFieldSelector));
        this.tick = this.element(by.id(this.tickSelector));

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
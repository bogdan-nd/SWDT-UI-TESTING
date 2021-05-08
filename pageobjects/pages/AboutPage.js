let {element,by} = require("protractor");
let BasePage = require("./BasePage");
let Offices = require("../fragments/Offices");

class AboutPage extends BasePage {
    constructor() {
        super();
        this.ourOffices = new Offices(element(by.css(".tabs-ui")));
    }

    async getCountryList() {
        return await this.ourOffices.getCountryList();
    }

    async changeRegion(region){
        return await this.ourOffices.changeRegion(region);
    }
}

module.exports = AboutPage;

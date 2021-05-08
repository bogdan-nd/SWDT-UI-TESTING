let {element,by} = require("protractor");
let BasePage = require("./BasePage");
let Offices = require("../fragments/Offices");

class AboutPage extends BasePage {
    constructor() {
        super();
        this.ourOffices = new Offices(element(by.css(".tabs-ui")));
    }

    getCountryList() {
        return this.ourOffices.getCountryList();
    }

    changeRegion(region){
        return this.ourOffices.changeRegion(region);
    }
}

module.exports = AboutPage;

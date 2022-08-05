const helpers = require("../runtime/helpers")

module.exports = function () {

    this.Given(/^I am on the "([^"]*)" portal$/, function (objectKey) {
        console.log(objectKey);
        return helpers.loadPage(page.pageObjects.urls[objectKey]);
    });

    this.When(/^I click on "([^"]*)" button$/, function(objectKey){
        return page.pageObjects.clickElement(objectKey);
    });


}
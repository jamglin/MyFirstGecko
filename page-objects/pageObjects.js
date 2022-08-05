const { assert } = require("chai");
const helpers = require("../runtime/helpers");


module.exports = {

    urls: {
        jootza:'https://www.jootza.com/'
    },
    
    elements: {
        LoginBtn:'/html/body/mdb-root/main/div/app-landing/div/div[2]/div[1]/div/div/div/a[2]'
    },

    clickElement : async function(objectKey){
        var selector = this.elements[objectKey];
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector)).click();
        await driver.sleep(2000);
        return;

    }
}
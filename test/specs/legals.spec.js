const LegalsPage = require('../pageobjects/LegalsPage')
const LoginPage = require('../pageobjects/LoginPage')

describe('Legal Organization tests', () => {
    beforeEach( async()=> {
        await LoginPage.open();
        await LoginPage.doLogin();
        await LoginPage.createClientButton.waitForDisplayed({ timeout: 10000 });
    })

    afterEach( async () => {
        await browser.reloadSession();
    })

    it('Create Organization', async () => {
        await LegalsPage.open();
        await browser.pause(5000);
        await LegalsPage.createLegalsButton.click();
        await LegalsPage.addCompanyModalPage.waitForDisplayed({timeout: 5000})
        await LegalsPage.companyNameField.setValue("Org name");
        await LegalsPage.tradeNameField.setValue("110258745563332");
        await LegalsPage.activitySelect.click();
        await browser.pause(5000);
    })
})
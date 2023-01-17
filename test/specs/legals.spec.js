const LegalsPage = require('../pageobjects/LegalsPage')
const LoginPage = require('../pageobjects/LoginPage')

describe('Legal Organization tests', () => {
    beforeEach( async()=> {
        await LoginPage.open();
        await LoginPage.doLogin();
        await LoginPage.createClientButton.waitForDisplayed({ timeout: 5000 });
    })

    it('Create Organization', async () => {
        await LegalsPage.open();
        await LegalsPage.createLegalsButton.click();
        await browser.pause(5000);
    })
})
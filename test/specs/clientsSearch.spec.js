const LoginPage = require('../pageobjects/LoginPage')
const ClientPage = require('../pageobjects/ClientPage')

// import myJson from '../../testData.json'

describe('Clients test', () => {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin();
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })

    it('should create new client', async ()=> {
        await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
        await ClientPage.openFirstClientDetails.click();
        await ClientPage.editModalPage.waitForDisplayed({ timeout: 10000 });
        await ClientPage.editSurnameField.clearValue();
        await ClientPage.editSurnameField.setValue('NEW SRUNAME')
        await browser.pause(10000);
    })



})
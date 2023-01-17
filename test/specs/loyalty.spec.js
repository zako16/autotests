const LoginPage = require('../pageobjects/LoginPage')
const LoyaltyPage = require('../pageobjects/LoyaltyPage')

import myJson from '../../testData.json'

describe('Clients test', () => {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin();
        // await ClientPage.open();
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })

    it('should create new client', async ()=> {
       
    })


})
const LoginPage = require('../pageobjects/LoginPage');

describe('Login page on Navigator CRM', () => {
    beforeEach('Setup browser', async() =>{
        await LoginPage.open();
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })

    it('should login', async () => {
        await LoginPage.doLogin();
        await expect(browser).toHaveUrlContaining('clients');
    })

    it('should fail login', async () => {
        await LoginPage.doLogin("Admin", "InvalidPassword");
        await expect(browser).toHaveUrlContaining('login');
    })
})
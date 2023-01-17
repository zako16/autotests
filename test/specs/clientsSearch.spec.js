const LoginPage = require('../pageobjects/LoginPage')
const ClientPage = require('../pageobjects/ClientPage')


describe('Clients test', () => {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin();
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })

    it('should open Search: Age Filter', async ()=> {
        await browser.pause(10000);
        await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
        await ClientPage.openSearch.click();
        await ClientPage.ageSelect.click();
        let filterText = await ClientPage.ageAllOption.getText()
        let filterText1 = await ClientPage.age18To23Option.getText()
        let filterText2 = await ClientPage.age24To31Option.getText()
        await expect(filterText).toHaveTextContaining('Все')
        await expect(filterText1).toHaveTextContaining('18-23')
        await expect(filterText2).toHaveTextContaining('24-31')
        await browser.pause(10000);
    })

    it('should open Search: Gender Filter', async ()=> {
        await browser.pause(10000);
        await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
        await ClientPage.openSearch.click();
        await ClientPage.genderSelect.click();
        let filterText = await ClientPage.ageAllOption.getText()
        let filterText1 = await ClientPage.age18To23Option.getText()
        let filterText2 = await ClientPage.age24To31Option.getText()
        await expect(filterText).toHaveTextContaining('Все')
        await expect(filterText1).toHaveTextContaining('18-23')
        await expect(filterText1).toHaveTextContaining('24-31')
        await browser.pause(10000);
    })
})
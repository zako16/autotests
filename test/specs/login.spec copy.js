const LoginPage = require('../pageobjects/LoginPage');

describe('Login page on Navigator CRM', () => {
    beforeEach('Setup browser', async() =>{
        // тут открываем бразуер
    })
    afterEach('Clear browser', async()=>{
        // await browser.executeScript("window.sessionStorage.clear()");
        // await browser.executeScript("window.localStorage.clear()");
    })

    it('should login', async () => {
        // перейти по странице такой-то
        await browser.url('http://167.114.201.175:5000/login');
        // ввести логин
        await (await browser.$('input[name="userName"]')).setValue('Admin');
        // ввести пароль
        await (await browser.$('input[name="password"]')).setValue('Admin@Navi');
        // нажать на кнопку Вход
        await (await browser.$('button[type="submit"]')).click();
        await expect(browser).toHaveUrlContaining('clients');
    })
})
const LoginPage = require('../pageobjects/LoginPage')
const ClientPage = require('../pageobjects/ClientPage')

describe('Clients test', () => {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin();
        await ClientPage.open();
    })

    it('should create new client', async ()=> {
        // уже тут шаги открытия формы клиента и заполнения 
       // первый способ
        await ClientPage.createClientButton.click();
        await ClientPage.surnameField.setValue("Тестовая фамилия")
        await ClientPage.firstnameField.setValue("Тестовое имя")

        //  второй способ
        let testingUser = {
            surname: "Тестовая фамилия"
        }
        await ClientPage.fillForm(testingUser)
        // окончание второго способ

        await browser.pause(5000);
    })

    it('remain test cases', async () => {

    })

})
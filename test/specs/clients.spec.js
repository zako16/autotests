const LoginPage = require('../pageobjects/LoginPage')
const ClientPage = require('../pageobjects/ClientPage')

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
        // уже тут шаги открытия формы клиента и заполнения 
       // первый способ
        // await browser.pause(5000);
        // implicit , explicit
        await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
        await ClientPage.createClientButton.click();
        await ClientPage.surnameField.setValue("Тестовая фамилия")
        await ClientPage.firstnameField.setValue("Тестовое имя")
        await ClientPage.genderRadio.click();
        await ClientPage.emailField.setValue("bellatrix.black.tester06@gmail.com");
        await ClientPage.middleNameField.setValue("Отчество");
        await ClientPage.birthField.setValue("05/06/1990");
        await ClientPage.phoneField.setValue("996700555666");

        await ClientPage.fillChild();
        await ClientPage.saveButton.click();
        await browser.acceptAlert();


        //  второй способ
        // let testingUser = {
        //     surname: "Тестовая фамилия"
        // }
        // await ClientPage.fillForm(testingUser)
        // окончание второго способ
    })

    xit('remain test cases', async () => {

    })

})
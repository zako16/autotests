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

    it('should create new client', async ()=> {
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
    })

    it('second variant', async () => {
        let testingUser = {
            surname: "Тестовая фамилия",
            name: "Имя",
            middleName: "Отчество",
            email: "bellatrix.black.tester07@gmail.com",
            birthdate: "05/06/2000"
        }
        await ClientPage.fillForm(testingUser)
    })

    it('should Edit Client', async ()=> {
        await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
        await ClientPage.openFirstClientDetails.click();
        await ClientPage.editModalPage.waitForDisplayed({ timeout: 10000 });
        await ClientPage.editSurnameField.clearValue();
        await ClientPage.editSurnameField.setValue('NEW SRUNAME')
        await browser.pause(10000);
    })

})
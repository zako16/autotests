class ClientPage {
    get createClientButton() { return $('button.clients-add-user-dialog') }


    get surnameField() { return $('input[formcontrolname="userSurname"]')}
    get firstnameField() { return $('input[formcontrolname="userName"]')}

    // второй способ
    async fillForm(testingUser){
        await this.surnameField.setValue(testingUser.surname)
    }

    async open(){
        await browser.url(browser.options.baseUrl + 'clients');
    }
}

module.exports = new ClientPage()
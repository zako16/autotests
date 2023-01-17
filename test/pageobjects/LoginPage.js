class LoginPage {
    get loginField () { return $('input[name="userName"]'); }
    get passwordField () { return $('input[name="password"]'); }
    get submitButton () { return $('button[type="submit"]'); }
    get createClientButton() { return $('button.clients-add-user-dialog') }

    async doLogin(username="Admin", password="Admin@Navi"){
        await this.loginField.setValue(username);
        await this.passwordField.setValue(password);
        await this.submitButton.click();
    }

    async open(){
        await browser.url(browser.options.baseUrl + 'login');
    }
}

module.exports = new LoginPage();
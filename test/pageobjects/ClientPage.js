class ClientPage {
    get createClientButton() { return $('button.clients-add-user-dialog') }


    get surnameField() { return $('input[formcontrolname="userSurname"]')}
    get firstnameField() { return $('input[formcontrolname="userName"]')}

    get genderRadio() { return $('mat-radio-group mat-radio-button div.mat-radio-label-content')}

    get emailField() { return $('input[type="email"]')}
    get phoneField() { return $('input[formcontrolname="phone"]')}
    get birthField() { return $('input[formcontrolname="birthday"]')}
    get middleNameField() { return $('input[formcontrolname="userMiddleName"]')}
    get saveButton() { return $('button[name="save"]')}


    get openChildModalPageButton() { return $('div.add-user-children span i')}
    get childsModalPage() { return $('mat-dialog-container app-children-dialog')}
    get childsModalPageAddChildOption() { return this.childsModalPage.$('button.mat-raised-button')}
    get childEnterRow() { return this.childsModalPage.$('div.crm-row')}
    get childNameField() { return this.childEnterRow.$('input[formcontrolname="Name"]')}
    get childBirthDateField() { return this.childEnterRow.$('input[formcontrolname="Birthday"]')}
    get childGenderSelect() { return this.childEnterRow.$('mat-select')}
    get childGenderSelectOption() { return $('//mat-option/span[contains(text(),"М")]')}
    get addChild() { return this.childsModalPage.$('//mat-dialog-actions/button[contains(text(),"Сохранить")]')}

    // второй способ
    async fillForm(testingUser){
        await this.surnameField.setValue(testingUser.surname)
    }

    async fillChild(childName="Phillip", birthdate="05/06/2000"){
        await this.openChildModalPageButton.click();
        await this.childsModalPageAddChildOption.click();
        await this.childNameField.setValue(childName);
        await this.childBirthDateField.setValue(birthdate)
        await this.childGenderSelect.click();
        await this.childGenderSelectOption.click();
        await this.addChild.click();
    }

    async open(){
        await browser.url(browser.options.baseUrl + 'clients');
    }
}

module.exports = new ClientPage()
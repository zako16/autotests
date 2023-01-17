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
    
    
    
    get openSearch() { return $('form.search-form')}
    get ageSelect() { return $('app-client-age-filter div.age')}
    get genderSelect() { return $('app-client-sex-filter div.gender')}

    //#region 
    get ageAllOption() {return $('app-client-age-filter div[class="option-wrap"] div:first-child')}
    get age18To23Option() {return $('app-client-age-filter div[class="option-wrap"] div:first-child')}
    get age24To31Option() {return $('app-client-age-filter div[class="option-wrap"] div:first-child')}

    //#endregion




    // тут все для редактирования селекторы
    get openFirstClientDetails() { return $('table.crm-navigator-table tbody tr')}
    get editModalPage() { return $('div[class="modal-window user"]')}
    get editSurnameField() { return this.editModalPage.$('input[placeholder="Фамилия"]')}

    async fillChild(childName="Phillip", birthdate="05/06/2000"){
        await this.openChildModalPageButton.click();
        await this.childsModalPageAddChildOption.click();
        await this.childNameField.setValue(childName);
        await this.childBirthDateField.setValue(birthdate)
        await this.childGenderSelect.click();
        await this.childGenderSelectOption.click();
        await this.addChild.click();
    }

    // второй способ
    async fillForm(testingUser){
        await this.surnameField.setValue(testingUser.surname);
        await this.firstnameField.setValue(testingUser.name);
        await this.middleNameField.setValue(testingUser.middleName);
        await this.emailField.setValue(testingUser.email);
        await this.birthField.setValue(testingUser.birthdate);
        await this.fillChild();
        await this.saveButton.click();
    }

    async open(){
        await browser.url(browser.options.baseUrl + 'clients');
    }
}

module.exports = new ClientPage()
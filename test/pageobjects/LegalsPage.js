class LegalsPage {
    get createLegalsButton() { return $('button[class="clients-add-user-dialog crm-button"]') }
    get addCompanyModalPage() { return $('div[class="modal-window company"]') }
    get companyNameField() { return this.addCompanyModalPage.$('input[formcontrolname="companyName"]') }
    get tradeNameField() { return this.addCompanyModalPage.$('input[formcontrolname="tradeName"]') }
    get activitySelect() { return this.addCompanyModalPage.$('mat-select[formcontrolname="occupation"]') }
    get activityFirstOption() { return $('') }



    async open(){
        await browser.url(browser.options.baseUrl + 'companies');
        await this.createLegalsButton.waitForDisplayed({ timeout: 5000 });
        await this.createLegalsButton.waitForClickable({ timeout: 5000 });
    }
}

module.exports = new LegalsPage()
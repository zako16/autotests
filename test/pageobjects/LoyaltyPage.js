class ClientPage {
    get createLoyaltyButton() { return $('thead button') }
    get firstListElement() { return $('div.bonus-level-data div') }
    get nameField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child input') }
    get sumField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(2) input') }
    get pointsField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(3) input') }
    get fromField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(4) input') }
    get toField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(5) input') }
    get saveButton() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:last-child div.bonus-level-edit div:first-child button') }
    get cancelButton() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:last-child div.bonus-level-edit div:last-child button') }


   



    async open(){
        await browser.url(browser.options.baseUrl + 'clients');
    }
}

module.exports = new ClientPage()
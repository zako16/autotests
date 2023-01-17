class LegalsPage {
    get createLegalsButton() { return $('//button[contains(text(), "Добавить организацию")]') }



    async open(){
        await browser.url(browser.options.baseUrl + 'companies');
    }
}

module.exports = new LegalsPage()
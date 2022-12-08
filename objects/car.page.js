import Page from "./page";

class CarPage extends Page {
    get bodyFilterButton() {
        return $('#first-web-component').shadow$('div.dh-io-vmos_3dj27.dh-io-vmos_1_SKc.wb-new-colors ' +
            '> div > div > div > div > div > div:nth-child(4) > div > section > div > div > section:nth-child(2) > button.dh-io-vmos_1RKkS:nth-child(4)')
    }

    get modelFilterButton() {
        return $('#first-web-component').shadow$('div.dh-io-vmos_3dj27.dh-io-vmos_1_SKc.wb-new-colors' +
            ' > div > div > div > div > div > div.wb-grid-row.dh-io-vmos_1svR5 > section > div > wb-button-group > button.dh-io-vmos_1nenx.dh-io-vmos_Kn8Xv.dh-io-vmos_DSCpv')
    }

    get cookiesButton() {
        return $('body > cmm-cookie-banner').shadow$('div > div > div.cmm-cookie-banner__content > cmm-buttons-wrapper ' +
            '> div > div > button.wb-button.wb-button--primary.wb-button--small.wb-button--accept-all')
    }

    get configurationButton() {
        return $('#first-web-component').shadow$('div.dh-io-vmos_3dj27.dh-io-vmos_1_SKc.wb-new-colors > div > div > div > div > div ' +
            '> div:nth-child(4) > section > div:nth-child(1) > div.wb-grid-row.dh-io-vmos_tGY4l > div:nth-child(8) > div > wb-popover > ul > li:nth-child(3) > a')
    }

    get maybachCard() {
        return $('#first-web-component').shadow$('div.dh-io-vmos_3dj27.dh-io-vmos_1_SKc.wb-new-colors > div > div > div > div' +
            ' > div > div:nth-child(4) > section > div:nth-child(1) > div.wb-grid-row.dh-io-vmos_tGY4l > div:nth-child(8)')
    }

    get forDriverButton() {
        return $('body > div.root.responsivegrid > div > owc-header').shadow$('header > div > nav.owc-header__header-navigation > div > ul > li:nth-child(2) > button')
    }

    get accessoriesList() {
        return $('body > div.root.responsivegrid > div > owc-header').shadow$('header > div > nav.owc-header__header-navigation > div > ul' +
            ' > li.owc-header-navigation-topic.owc-header-navigation-topic--desktop-nav.owc-header-navigation-topic--selected > div > div.owc-header-flyout__innerContent' +
            ' > div:nth-child(2) > ul > li.owc-header-navigation-topic > button')
    }

    get accessoriesButton() {
        return $('body > div.root.responsivegrid > div > owc-header').shadow$('header > div > nav.owc-header__header-navigation > div > ul' +
            ' > li.owc-header-navigation-topic.owc-header-navigation-topic--desktop-nav.owc-header-navigation-topic--selected > div > div.owc-header-flyout__innerContent' +
            ' > div:nth-child(2) > ul > li.owc-header-navigation-topic.owc-header-navigation-topic--selected > div > div.owc-header-flyout__innerContent > div > ul > li:nth-child(4)')
    }

    get carEqcAmg() {
        return $('#first-web-component').shadow$('div.dh-io-vmos_3dj27.dh-io-vmos_1_SKc.wb-new-colors > div > div > div > div > div > div:nth-child(4) > section' +
            ' > div:nth-child(1) > div.wb-grid-row.dh-io-vmos_tGY4l > div:nth-child(2)')
    }

    get dealerButton(){
        return $('body > div.root.responsivegrid > div > owc-footer > owc-site-map > div > owc-site-map-section:nth-child(1)')
            .shadow$('li > div > ul > li:nth-child(3) > a')
    }

    get footer(){
        return $('body > div.root.responsivegrid > div > owc-footer')
    }

    get randomCar() {
        return $('#first-web-component').shadow$('div.dh-io-vmos_3dj27.dh-io-vmos_1_SKc.wb-new-colors > div > div > div > div > div > div:nth-child(4)' +
            ' > section > div:nth-child(1) > div.wb-grid-row.dh-io-vmos_tGY4l > div:nth-child(4)')
    }

    async open() {
        await super.open('https://www.mercedes-benz.fi/passengercars/models.html?group=all&subgroup=see-all&view=BODYTYPE');
    }

    async openFullPage() {
        await super.open('https://www.mercedes-benz.fi/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE');
    }

    async openRusPage() {
        await super.open('https://www.mercedes-benz.ru/passengercars/models.html?group=all&subgroup=see-all&view=BODYTYPE');
    }

    async clickBodyFilterButton() {
        await (await this.bodyFilterButton).click();
    }

    async clickModelFilterButton() {
        await (await this.modelFilterButton).click();
    }

    async clickCookiesButton() {
        await (await this.cookiesButton).click();
    }

    async clickConfigurationButton() {
        await (await this.configurationButton).click();
    }

    async clickForDriverButton() {
        await (await this.forDriverButton).click();
    }

    async clickAccessoriesList() {
        await (await this.accessoriesList).click();
    }

    async clickAccessoriesButton() {
        await (await this.accessoriesButton).click();
    }

    async clickDealerButton() {
        await (await this.dealerButton).click();
    }



    async clickRandomCar() {
        await (await this.randomCar).click();
    }

    async enterSearchDealerField() {
        await browser.keys('Enter');
    }

}

export default new CarPage();
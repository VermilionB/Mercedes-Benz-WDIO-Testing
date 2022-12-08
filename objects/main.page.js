import Page from "./page";
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

class MainPage extends Page {
    get searchButton() {
        return $('body > div.header > brandhub-header').shadow$('div > div > div.brandhub-header__container ' +
            '> div.brandhub-meta-navigation.brandhub-header__meta-navigation.brandhub-meta-navigation--in > ul > li:nth-child(6) > button')
    }

    get searchField() {
        return $('body > div.header > brandhub-header').shadow$('div > div > div.brandhub-search.brandhub-search--in ' +
            '> div.brandhub-search__container > div > form > div > input')
    }

    get cookiesButton() {
        return $('body > cmm-cookie-banner').shadow$('div > div > div.cmm-cookie-banner__content > cmm-buttons-wrapper ' +
            '> div > div > button.wb-button.wb-button--primary.wb-button--small.wb-button--accept-all')
    }

    get vehiclesButton() {
        return $('body > div.header > brandhub-header')
            .shadow$('div > div > div.brandhub-header__container > div.brandhub-header__main-navigation > div > div > div > brandhub-main-navigation')
            .shadow$('div > ul > div:nth-child(6) > brandhub-main-navigation-item')
            .shadow$('button > span')
    }

    get newCarsButton() {
        return $('body > div.header > brandhub-header')
            .shadow$('div > div > div.brandhub-header-flyout.brandhub-header-flyout--in > div.brandhub-header-flyout__container' +
                ' > div.brandhub-header-flyout__content-wrapper.brandhub-header-flyout__content-wrapper--4-images.brandhub-header-flyout__content-wrapper--1-list' +
                ' > div > div.headerflyoutlistitem > brandhub-header-flyout-list-item')
            .shadow$('div > div > div > ul > li:nth-child(1) > brandhub-header-flyout-list-item-link')
            .shadow$('a > span')
    }

    get newsButton(){
        return $('body > div.header > brandhub-header').shadow$('div > div > div.brandhub-header-flyout.brandhub-header-flyout--in > div.brandhub-header-flyout__container' +
            ' > div.brandhub-header-flyout__content-wrapper.brandhub-header-flyout__content-wrapper--4-images.brandhub-header-flyout__content-wrapper--1-list > div > div:nth-child(3)')
    }

    async open() {
        await super.open('https://www.mercedes-benz.com/en/');
    }

    async clickSearchButton() {
        await (await this.searchButton).click();
    }

    async clickCookiesButton() {
        await (await this.cookiesButton).click();
    }

    async inputSearchField(searchString) {
        await (await this.searchField).setValue(searchString);
    }

    async clickVehiclesButton() {
        await (await this.vehiclesButton).click();
    }

    async clickNewCarsButton() {
        await (await this.newCarsButton).click();
    }

    async clickNewsButton() {
        await (await this.newsButton).click();
    }

    async enterSearchField() {
        await browser.keys('Enter');
    }
}

export default new MainPage();
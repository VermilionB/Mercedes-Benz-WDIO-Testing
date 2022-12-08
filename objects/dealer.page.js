import Page from "./page";

class DealerPage extends Page {
    async open() {
        await super.open('https://www.mercedes-benz.fi/passengercars/mercedes-benz-cars/dealer-locator.html')
    }

    get searchDealerByNameButton() {
        return $('#first-web-component').shadow$('div > div > div > div.dl-left-panel.dl-map-view__left-panel--modifier > div > div.dl-map-view__search.dl-map-view__search--desktop-mode' +
            ' > div.dl-map-view__search__search-box > div > section > div.dl-search-tabs > wb-tabs > wb-tab-bar > wb-horizontal-scroll > div > div.wb-tab-bar__wrapper > wb-tab:nth-child(2)')
    }

    get inputDealerName() {
        return $('body > div.root.responsivegrid > div > div > div > dh-io-dlc').shadow$('div > div > div > div.dl-left-panel.dl-map-view__left-panel--modifier > div > div.dl-map-view__search.dl-map-view__search--desktop-mode' +
            ' > div.dl-map-view__search__search-box > div > section > div.dl-search-input__input > wb-input-control > wb-input > input')
    }

    get foundDealerName() {
        return $('#first-web-component').shadow$('div > div > div > div.dl-left-panel > div > div.dl-map-view__list > div > div > wb-card:nth-child(1) > div > div > div')
    }

    get dealerName() {
        return $('#first-web-component').shadow$('div > div > div > div.dl-left-panel > div > div.dl-map-view__dealer-card-wrapper > div > div > div.dl-dealer-name > h1')
    }

    async clickSearchDealerByNameButton() {
        await (await this.searchDealerByNameButton).click();
    }

    async clickFoundDealerName() {
        await (await this.foundDealerName).click();
    }

    async clickDealerName() {
        await (await this.dealerName).click();
    }

    async inputSearchDealerField(searchString) {
        await (await this.inputDealerName).setValue(searchString);
    }

    async enterSearchDealerField() {
        await browser.keys('Enter');
    }
}

export default new DealerPage();
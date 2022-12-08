import Page from "./page";

class ConfiguratorPage extends Page {
    get colorButton() {
        return $('#first-web-component').shadow$('#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-app-container__navigation.ng-star-inserted > cc-navigation' +
            ' > nav > div > ul > li:nth-child(2) > a')
    }

    get wheelsButton() {
        return $('#first-web-component').shadow$('#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-app-container__navigation.ng-star-inserted > cc-navigation' +
            ' > nav > div > ul > li.ng-star-inserted.is-current-group > ul > li:nth-child(2) > a')
    }

    get blueColorButton() {
        return $('#first-web-component').shadow$('#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted' +
            ' > div > div.cc-app-container__content-row-layout-selectables > cc-configuration > div > div > ng-component > ng-component > div > cc-single-choice' +
            ' > wb-card > div > cc-single-choice-list > div.cc-single-choice-list.ng-star-inserted > div:nth-child(7)')
    }

    get expensiveWheelsButton() {
        return $('#first-web-component').shadow$('#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div ' +
            '> div.cc-app-container__content-row-layout-selectables > cc-configuration > div > div > ng-component > ng-component > div' +
            ' > cc-single-choice > wb-card > div > cc-single-choice-list > div.cc-single-choice-list.ng-star-inserted > div:nth-child(3)')
    }

    get acceptWheelsButton() {
        return $('#first-web-component').shadow$('#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > cc-modal-host > cc-lazy-host' +
            ' > ng-component > wb-modal > div > div > wb-modal-footer > button.wb-button.wb-button--primary.wb-button--large.ng-star-inserted')
    }

    get configuratorCar() {
        return $('#first-web-component').shadow$('#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container' +
            ' > div.cc-app-container__navigation.ng-star-inserted > cc-navigation > nav > div > ul > li:nth-child(7) > a')
    }

    get testDriveButton() {
        return $('#first-web-component').shadow$('#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted' +
            ' > div > div:nth-child(2) > cc-configuration > div > div > cc-summary-view > div > cc-nba-bar:nth-child(1) > div > div.cc-nba-bar__primary.ng-star-inserted > wb-button-control > button')
    }

    get acceptTestDriveButton() {
        return $('#first-web-component')
            .shadow$('#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container' +
            ' > cc-modal-host > cc-lazy-host > ng-component > wb-modal > div > div > wb-modal-content > cc-script-loader > cc-shadow-dom-wrapper')
            .shadow$('div > aemf-form-container')
            .shadow$('div > form > div > div.wb-margin-bottom-xs.wb-grid-col-mq1-12.form-formstep-cta.form-formstep-cta--align-right > button')

    }

    async open() {
        await super.open('https://www.mercedes-benz.fi/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/FI/fi/bm/2239761,2239791');
    }

    async clickColorButton() {
        await (await this.colorButton).click();
    }

    async clickBlueColorButton() {
        await (await this.blueColorButton).click();
    }

    async clickWheelsButton() {
        await (await this.wheelsButton).click();
    }

    async clickExpensiveWheelsButton() {
        await (await this.expensiveWheelsButton).click();
    }

    async clickAcceptWheelsButton() {
        await (await this.acceptWheelsButton).click();
    }

    async clickConfiguratorCar() {
        await (await this.configuratorCar).click();
    }

    async clickTestDriveButton() {
        await (await this.testDriveButton).click();
    }

}

export default new ConfiguratorPage();
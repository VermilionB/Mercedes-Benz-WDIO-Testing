import Page from "./page";

class CClassPage extends Page {

    get supportButton() {
        return $('body > main > div.pes > div:nth-child(5) > div > div:nth-child(3)')
    }

    async open() {
        await super.open('https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/c-class/saloon-w206/main.html');
    }

    async clickSupportButton() {
        await (await this.supportButton).click();
    }
}

export default new CClassPage();
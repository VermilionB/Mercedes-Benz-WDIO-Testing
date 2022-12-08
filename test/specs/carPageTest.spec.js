import CarPage from "../../objects/car.page";
import DealerPage from "../../objects/dealer.page";
import CClassPage from "../../objects/c-class.page";

describe("Cat Page Testing", () => {

    beforeEach(async () => {
        await CarPage.open();
    });
    it("should test filter button by body", async () => {
        await CarPage.clickCookiesButton();
        await CarPage.clickBodyFilterButton();

        expect(await CarPage.bodyFilterButton.getText()).toEqual("Farmari");
    });

    it("should test filter button", async () => {
        await CarPage.clickModelFilterButton();

        expect(await CarPage.carEqcAmg).toBeDisplayed();
    });

    it('should find dealer', async () => {
        await CarPage.maybachCard.scrollIntoView();
        await CarPage.maybachCard.scrollIntoView({block: 'center', inline: 'center'});
        await CarPage.footer.scrollIntoView();
        await CarPage.dealerButton.scrollIntoView();
        await CarPage.dealerButton.moveTo();
        await CarPage.clickDealerButton();

        await DealerPage.clickSearchDealerByNameButton();
        await DealerPage.inputSearchDealerField('E. Hartikainen Oy');
        await DealerPage.enterSearchDealerField();
        await DealerPage.clickFoundDealerName();
        await DealerPage.clickDealerName();

        expect(await DealerPage.dealerName).toBeDisplayed();

    });

    it('should show support details', async () => {
        await CarPage.openRusPage();
        await CarPage.clickCookiesButton();
        await CarPage.clickRandomCar();

        await CClassPage.clickSupportButton();
        browser.pause(5000);
    });
});
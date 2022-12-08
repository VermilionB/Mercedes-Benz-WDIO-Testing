import CarPage from "../../objects/car.page";


describe("Accessories Testing", async () => {
    it("should test accessories page", async () => {
        await CarPage.openFullPage();
        await CarPage.clickCookiesButton();
        await CarPage.clickForDriverButton();
        await CarPage.clickAccessoriesList();
        await CarPage.accessoriesButton.moveTo();
        await CarPage.clickAccessoriesButton();

        expect(await browser.getTitle()).toEqual("Aidot varaosat ja lisävarusteet");
    });
});
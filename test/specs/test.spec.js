import CarPage from "../../objects/car.page";
import MainPage from "../../objects/main.page";
import ConfiguratorPage from "../../objects/configurator.page";

describe("Test Suite", () => {

    it("should test filter button", async () => {
        await CarPage.open();
        await CarPage.clickCookiesButton();
        await CarPage.clickFilterButton();

        expect(await CarPage.filterButton.getText()).toEqual("Farmari");
    });

    it("should test input in search field", async () => {
        await MainPage.open();
        await MainPage.clickCookiesButton();
        await MainPage.clickSearchButton();
        await MainPage.inputSearchField('G63')
        await MainPage.enterSearchField();

        expect(await MainPage.searchField.getValue()).toEqual("G63");
    })

    it("should test configuration of car", async () => {
        await CarPage.open();
        await CarPage.clickCookiesButton();
        await CarPage.maybachCard.moveTo();
        await CarPage.clickConfigurationButton();
        await ConfiguratorPage.clickColorButton();
        await ConfiguratorPage.clickBlueColorButton();
        await ConfiguratorPage.clickWheelsButton();
        await ConfiguratorPage.clickExpensiveWheelsButton();
        await ConfiguratorPage.clickAcceptWheelsButton();
        await ConfiguratorPage.clickConfiguratorCar();
        await ConfiguratorPage.clickTestDriveButton();

        expect(await ConfiguratorPage.acceptTestDriveButton).toBeDisplayed();

    })

});
import CarPage from "../../objects/car.page";
import ConfiguratorPage from "../../objects/configurator.page";

describe("Configurator Testing", () => {

    it("should test configuration of car", async () => {
        await CarPage.open();
        await CarPage.clickCookiesButton();
        await CarPage.maybachCard.scrollIntoView();
        await CarPage.maybachCard.scrollIntoView({ block: 'center', inline: 'center' });
        await CarPage.maybachCard.moveTo();
        await CarPage.clickConfigurationButton();
        await ConfiguratorPage.clickColorButton();
        await ConfiguratorPage.clickBlueColorButton();
        await ConfiguratorPage.wheelsButton.moveTo();
        await ConfiguratorPage.clickWheelsButton();
        await ConfiguratorPage.clickExpensiveWheelsButton();
        await ConfiguratorPage.clickAcceptWheelsButton();
        await ConfiguratorPage.clickConfiguratorCar();
        await ConfiguratorPage.clickTestDriveButton();

        expect(await ConfiguratorPage.acceptTestDriveButton).toBeDisplayed();

    })

});
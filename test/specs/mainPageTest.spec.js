import MainPage from "../../objects/main.page";

describe("Main Page Testing", () => {
    it("should test input in search field", async () => {
        await MainPage.open();
        await MainPage.clickCookiesButton();
        await MainPage.clickSearchButton();
        await MainPage.inputSearchField('G63')
        await MainPage.enterSearchField();

        expect(await MainPage.searchField.getValue()).toEqual("G63");
    })

    it('should test cars catalog output', async () => {
        await MainPage.open();
        await MainPage.clickVehiclesButton();
        await MainPage.newCarsButton.moveTo();

    })

    it('should show some news about Maybach project', async () => {
        await MainPage.open();
        await MainPage.clickVehiclesButton();
        await MainPage.newsButton.moveTo();
        await MainPage.clickNewsButton();
    });
});

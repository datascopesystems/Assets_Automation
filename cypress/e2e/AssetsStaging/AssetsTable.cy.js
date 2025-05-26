import AssetsTable from "../../pageObjects/assetsTable";
describe('Assets Table', () => {
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('should visit the Assets Table page', () => {
        const assetsTables = new AssetsTable()
        assetsTables.openUrl()
        assetsTables.AddAsset()
        // assetsTables.enterAssetDetails()
        // cy.wait(1000)
        // assetsTables.addAssetFiles()
        // assetsTables.addAssetImages()
        // cy.wait(5000)
        // assetsTables.addAssetInspection()
        // assetsTables.addOperatingTime()
        // assetsTables.addBookableDetails()
        // assetsTables.addCustomField()
        // assetsTables.clickteams()
        // cy.wait(5000)
        // assetsTables.clicksiteDocuments()
        // assetsTables.clcikqrcode()
        // assetsTables.clickqrGenerate()
        // assetsTables.addSiteTransfer()
        // assetsTables.clickAppStory()
        // assetsTables.clickclose()
        // assetsTables.clickexportExcel()

    })
})
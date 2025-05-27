import AssetsGroupTable from "../../pageObjects/assetGroupTabls";
describe('Booking Schedule', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
describe('Manage Assets', () => {
    it('should visit the Manage Assets page', () => {
        const assetGroup = new  AssetsGroupTable()
        assetGroup.openUrl()
        assetGroup.validateManageAssets()
        assetGroup.clickAssetsGroup()
        assetGroup.clickAddAssetsGroup()
        // assetGroup.entertypeAssetgroup()
        // assetGroup.selectactivegroupCheckbox()
        // cy.wait(5000)
        // assetGroup.selectradiobuttonAssets()
        // assetGroup.clickaddAsset()
        // assetGroup.clickactiveassetCheckbox()
        // assetGroup.enterlocation()
        // assetGroup.selectcompany()
        // assetGroup.selectassetGroup()
        

        
    })
})
})

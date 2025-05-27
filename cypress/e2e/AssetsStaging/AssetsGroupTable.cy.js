import AssetsGroupTable from "../../pageObjects/assetGroupTabls";
describe('AssetsGroupTable', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
describe('Manage Assets Group Table ', () => {
    it('should visit the Manage Assets Group Table page', () => {
        const assetGroup = new  AssetsGroupTable()
        assetGroup.openUrl()
        cy.wait(1000)
        //assetGroup.clickAddAssetsGroup()
        assetGroup.ManageAssetGroup()
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

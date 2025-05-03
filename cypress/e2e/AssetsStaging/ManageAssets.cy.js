import  ManageAssets from "../../pageObjects/manageAssets"
describe('Booking Schedule', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
describe('Manage Assets', () => {
    it('should visit the Manage Assets page', () => {
        const assets = new  ManageAssets()
        assets.openUrl()
        //assets.enterUsername('lokesh.s_dev')
        //assets.enterPassword('Assets123?')
        //assets.clickLoginButton()
        assets.validateManageAssets()
        assets.clickAssetsGroup()
        assets.clickAddAssetsGroup()
        assets.entertypeAssetgroup()
        assets.selectactivegroupCheckbox()
        cy.wait(5000)
        assets.selectradiobuttonAssets()
        assets.clickaddAsset()
        assets.clickactiveassetCheckbox()
        assets.enterlocation()
        assets.selectcompany()
        assets.selectassetGroup()
        

        
    })
})
})

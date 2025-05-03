import AssetsTable from "../../pageObjects/assetsTable";
describe('Assets Table', () => {
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit the Assets Table page', () => {
        cy.fixture('loginDetails').then(function(data){
        const assetsTables = new AssetsTable()
        assetsTables.openUrl()
        assetsTables.clickaddAsset()
        assetsTables.clickactiveCheckbox()
        assetsTables.enterlocation()
        cy.wait(5000)
        assetsTables.selectcompany()
        assetsTables.selectassetGroup()
        //assetsTables.enterID()
        //assetsTables.selectopenAsset()
        //assetsTables.clickArrow()
    })
})
})
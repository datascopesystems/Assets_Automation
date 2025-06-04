import SiteTransfer from '../../pageObjects/siteTransfer'
describe('AssetsGroupTable', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
describe('Manage Assets Group Table ', () => {
    it('should visit the Manage Assets Group Table page', () => {
        const transfer = new  SiteTransfer()
        transfer.openUrl()
        cy.wait(1000)
        //transfer.clickAddAssetsGroup()
        transfer.checktransfer()
        transfer.searchAcrossPages("60118",[0,1,2,3])

    })
})
})
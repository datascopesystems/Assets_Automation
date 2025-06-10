import SiteTransfer from '../../pageObjects/siteTransfer'
describe('AssetsGroupTable', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
describe('checking site transfer', () => {
    it('checking site transfer', () => {
        const transfer = new  SiteTransfer()
        transfer.openUrl()
        cy.wait(1000)
        //transfer.clickAddAssetsGroup()
        transfer.checktransfer()
        transfer.searchAcrossPages("loki",[0,1,2])

    })
})
})
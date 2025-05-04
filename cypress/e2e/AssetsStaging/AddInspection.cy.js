import AddInspection from "../../pageObjects/addInspection";
describe('Add Inspection', () => {
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit the Add Inspection Page', () => {
        //cy.fixture('loginDetails').then(function(data){
        const inspection = new AddInspection()
       inspection.openURL()
       inspection.clickburgerMenu()
       inspection.clicksideNavbar()
       inspection.selectAsset()
       inspection.chooseinspectionDate()
       inspection.enterinspectorName()
       inspection.selectverdict()
       inspection.selectfile()
       inspection.enternotes()
       inspection.clicksubmit()
       inspection.assetsvalidateSubmitted()
       inspection.clickclose()
    })
})

import ManageInspections from "../../pageObjects/manageInspections";

describe('Manage Inspections', () => {
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit the Manage Inspections Page', () => {
        //cy.fixture('loginDetails').then(function(data){
        const manage = new ManageInspections()
       manage.openUrl()
       manage.clickburgerMenu()
       manage.clicksideNavbar()
       manage.selectAsset()
       manage.selectFrom()
       manage.selectTo()
       manage.clcickSearch()
       
    })
})
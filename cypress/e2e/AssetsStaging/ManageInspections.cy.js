import ManageInspections from "../../pageObjects/manageInspections";

describe('Manage Inspections', () => {
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('should visit the Manage Inspections Page', () => {

        const manage = new ManageInspections()
       manage.openUrl()
       manage.selectAsset()
       manage.selectFrom()
       manage.selectTo()
       manage.clcickSearch()
       cy.wait(2000)
       manage.clickscrollBar()
       manage.clickviewFile()
       
    })
})
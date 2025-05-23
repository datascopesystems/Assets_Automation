import AddInspection from "../../pageObjects/addInspection";
describe('Add Inspection', () => {
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('should visit the Add Inspection Page', () => {
        const inspection = new AddInspection()
       inspection.openURL()
       inspection.AddInspection()
       inspection.assetsvalidateSubmitted()
       inspection.clickclose()
    })
})

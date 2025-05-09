import AssettypesTable from "../../pageObjects/assettypesTable";

describe('Assets Table', () => {
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('should display asset types table', () =>{
        const assettypesTable = new AssettypesTable();
        assettypesTable.openUrl()
       // assettypesTable.enterUsername()
       // assettypesTable.enterPassword()
        //assettypesTable.clickLoginButton()
        assettypesTable.validateAssetsTable()
        assettypesTable.clickassettypeRadio()
       // assettypesTable.clickaddAssettype()
        //assettypesTable.clickactiveCheckbox()
        //assettypesTable.clickassetGroup()
        //cy.wait(5000)
       // assettypesTable.entersearchByName()
       assettypesTable.entersearchByID()
       cy.wait(5000)
       assettypesTable.clickimportAssets()

    })
})



//cy.get('tr').eq(0).find('span[class="dx-checkbox-icon"]').eq(1).click()
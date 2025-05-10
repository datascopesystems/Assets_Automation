import AssettypesTable from "../../pageObjects/assettypesTable";

describe('Assets Table', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('should display asset types table', () => {
        const assettypesTable = new AssettypesTable();
        assettypesTable.openUrl();
        assettypesTable.validateAssetsTable();
        assettypesTable.clickassettypeRadio();
        assettypesTable.entersearchByID();
        cy.wait(5000);
        assettypesTable.clickimportAssets();
        cy.wait(5000);
        assettypesTable.getcompany();
        cy.wait(5000);

        // Uncomment and use cy.task to fetch excelData
        cy.task('readExcel', {
            filePath: 'C:/Assets_Automation/cypress/fixtures/Import Assets.xlsx',
            sheetName: 'Sheet1',
        }).then((excelData) => {
            assettypesTable.pasteExcelData(excelData);
        });
    });
});
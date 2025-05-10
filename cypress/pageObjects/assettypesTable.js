class AssettypesTable{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    manageAssetsURL="https://www.datascopesystem.com/Assets_Staging/Frontend/manageAssets"
    assettypeRadio="#manage-assets-table_rb_asset-types > .MuiButtonBase-root > .PrivateSwitchBase-input"
    addAssettype=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    activeCheckbox=".dx-row-inserted > [aria-describedby='dx-col-12'] > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon"
    assetGroup="#manage-assets-table_dt_asset-type > div > div.dx-datagrid-rowsview.dx-last-row-border > div > table > tbody > tr.dx-row.dx-data-row.dx-row-lines.dx-column-lines.dx-row-inserted > td.dx-datagrid-validator.dx-validator.dx-visibility-change-handler.dx-datagrid-invalid"
    searchByID="[aria-colindex='1'] > .dx-editor-with-menu > .dx-editor-container > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    searchByName="[aria-colindex='2'] > .dx-editor-with-menu > .dx-editor-container > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    importAssets="a[title='Import Assets']"
    company=":nth-child(2) > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    ExcelData=".sc-jTrPJq"
    

    openUrl(){
        cy.visit(this.url)
    }

    enterUsername(username){
        cy.get(this.username).type(username)
   }  

    enterPassword(password){
        cy.get(this.password).type(password)
    }           
    
    clickLoginButton(){
        cy.get(this.loginButton).click()
    }  
    validateAssetsTable(){
        cy.url().should('eq', this.manageAssetsURL)
    }
    clickassettypeRadio(){
        cy.get(this.assettypeRadio).click()
    }
    clickaddAssettype(){
        cy.get(this.addAssettype).type('QA Automation Type')
       // cy.get('.dx-focused > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('QA Automation Type')
        cy.wait(1000)
    }
    clickactiveCheckbox(){
        //cy.get(this.activeCheckbox).click({ force: true });
        cy.get('tr').eq(2).find('span[class="dx-checkbox-icon"]').eq(1).click()
         cy.get('body').click(0, 0);
     }
     clickassetGroup(){
        cy.get(this.assetGroup).click()
        cy.get(this.assetGroup).type('QA Loki Automation')
        cy.contains('div.dx-item-content.dx-list-item-content', 'QA Loki Automation').should('be.visible').click();
        cy.get('body').click(0, 0); 
        
    }
    entersearchByID(){
        cy.get(this.searchByID).type('129408')
        cy.get('body').click(0, 0);
    }
    entersearchByName(){
        cy.get(this.searchByName).type('QA Automation Type')
    }
    clickimportAssets(){
        cy.get(this.importAssets).should('be.visible').click()
       // cy.get('a[title="Import Assets"]').should('be.visible').click();
        //cy.contains('title', 'Import Assets').should('be.visible').click();

    }
    getcompany(){
        cy.get(this.company).click()
        cy.get(':nth-child(6) > .dx-item-content').click()
    }
   getPasteArea() {
    //return cy.get('.sc-jTrPJq').should('be.visible');
         return cy.get('.sc-jTrPJq.gzraSL').should('be.visible'); // Ensure proper selector and return the chainable object
      }
    
    pasteExcelData(excelData) {
        // Limit the data to the first 3 rows
        const limitedData = excelData.slice(0, 10);

        // Convert each row (object) into a tab-separated string
        const pastedData = limitedData
            .map(row => {
                if (typeof row === 'object' && row !== null) {
                    // Add spaces between characters for the first column only
                    const processedRow = Object.values(row).slice(0, 4).map((value, index) => {
                        if (index === 0) { // Apply spacing to the first column
                            return String(value).split('').join(' ');
                        }
                        return String(value); // Keep other columns unchanged
                    });
                    return processedRow.join('\t'); // Join the processed values with tabs
                }
                return String(row); // Fallback for non-object rows
            })
            .join('\n') // Join rows with newlines
            .trimEnd();

        this.getPasteArea().then(el => {
            if (el[0].tagName === 'INPUT' || el[0].tagName === 'TEXTAREA') {
                el[0].value = pastedData; // Set the value for input/textarea
            } else if (el[0].hasAttribute('contenteditable')) {
                el[0].innerText = pastedData; // Set the inner text for contenteditable elements
            } else {
                throw new Error('Target element is not editable');
            }

            // Trigger input and change events to simulate user interaction
            el[0].dispatchEvent(new Event('input', { bubbles: true }));
            el[0].dispatchEvent(new Event('change', { bubbles: true }));
        });

        return this;
    }

}
export default AssettypesTable;

Cypress.on('log:added', (log) => {
    console.log(log);
});
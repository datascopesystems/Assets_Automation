class AssettypesTable{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    manageAssetsURL="https://www.datascopesystem.com/Assets_Staging/Frontend/manageAssets"
    assettypeRadio="#manage-assets-table_rb_asset-types > .MuiButtonBase-root > .PrivateSwitchBase-input"
    addAssettype=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    //activeCheckbox=".dx-row-inserted > [aria-describedby='dx-col-12'] > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon"
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

    }
    getcompany(){
        cy.get(this.company).click()
        cy.get(':nth-child(6) > .dx-item-content').click()
    }
    getPasteArea() {
    return cy.get(this.ExcelData).should('be.visible');
   }
    pasteExcelData(excelData) {
    const limitedData = excelData.slice(0, 10);
    const pastedData = limitedData
    .map(row => {
      if (typeof row === 'object' && row !== null) {
        const values = Object.values(row);
        return values.join(','); // Join with commas for CSV
      }
      return String(row);
    })
    .join('\n','\td')
    .trimEnd();

  this.getPasteArea().then(el => {
    const target = el[0];
    if (!target) throw new Error('No target element found');
    const tagName = target.tagName.toUpperCase();
    if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
      target.value = pastedData;
    } else if (target.hasAttribute('contenteditable')) {
      target.innerText = pastedData;
    } else {
      throw new Error('Target element is not editable');
    }
    cy.wrap(target).trigger('input').trigger('change');
   // cy.get(target) .type('{ctrl}v', { force: true });
  });
  return this;



  }
  }










export default AssettypesTable;

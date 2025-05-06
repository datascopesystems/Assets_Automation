class AssetsTable{
    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    manageAssetsURL="https://www.datascopesystem.com/Assets_Staging/Frontend/manageAssets"
    addAsset=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    activeCheckbox=".dx-row-inserted > [aria-describedby='dx-col-18'] > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon"
    location=".dx-row-inserted > [aria-describedby='dx-col-11']"
    company=".dx-row-inserted > [aria-describedby='dx-col-4'"
    assetGroup=".dx-row-inserted > [aria-describedby='dx-col-3']"
    ID="[aria-colindex='1'] > .dx-editor-with-menu > .dx-editor-container > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    openAsset="#manage-assets-table_s_show-master-detail-133452 > :nth-child(2)"
    Arrow="#manage-assets-table_s_show-master-detail-133452 > .svg-inline--fa > path"
    
    



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
    clickaddAsset(){
        cy.get(this.addAsset).click()
        cy.get('.dx-focused > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').clear().type('QA Loki cypress Auto Asset')
        cy.wait(5000)
       
    }
    clickactiveCheckbox(){
       cy.get(this.activeCheckbox).click({ force: true });
        cy.get('body').click(0, 0);
    }
    enterlocation(){
        cy.get(this.location).type('Sivanadanoor')
        cy.get('body').click(0, 0);
        
    }
    selectcompany(){
        cy.get(this.company).click() 
        cy.get(this.company).type('ACOMPANY');
        cy.contains('div.dx-item-content.dx-list-item-content', 'ACOMPANY').click() 
    }
    selectassetGroup(){
        cy.get(this.assetGroup).click()
        cy.get(this.assetGroup).type('AprilDemoGroup / April DemoType')
        cy.contains('div.dx-item-content.dx-list-item-content', 'AprilDemoGroup / April DemoType')
      .should('be.visible')
      .click();
        cy.get('body').click(0, 0); 
    
    }
    enterID(){
        cy.get(this.ID).type('133452')
    }
    selectopenAsset(){
        cy.get(this.openAsset).click()
    }
    clickArrow(){
        cy.get(this.Arrow).click()
    }

























} 
export default AssetsTable
//test push
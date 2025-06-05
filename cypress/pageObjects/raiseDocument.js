class RaiseDocument{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    raiseDocumentURL="https://www.datascopesystem.com/Assets_Staging/Frontend/manageAssets"
    raiseDocument=".MuiGrid-grid-md-10 > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root"
    group=":nth-child(2) > .col-md-5 > .dx-field > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    form=":nth-child(3) > .col-md-5 > .dx-field > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    submitButton=".col-md-5 > .MuiButtonBase-root"
    iFrame=".formFillerInner"
    searchIcon="#ion-overlay-2 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-md > div.alert-button-group.sc-ion-alert-md > button" // This element is in shadowDOM







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
    
    validateRaiseDocumentURL(){
        cy.url().should('eq', this.raiseDocumentURL)
    }
    clickraiseDocument(){
        cy.get(this.raiseDocument).click()
    }
    selectgroup(){
        cy.get(this.group).type('QA Site Demo')
        cy.contains('.dx-item-content','QA Site Demo').click({force:true})
    }
    selectform(){
        cy.get(this.form).type('Asset Test')
        cy.get('.dx-scrollview-content').contains('Asset Test').click({force:true})
    }
    clicksubmitButton(){
        cy.get(this.submitButton).click()
    }
   
     getiFrame() {
     cy.get(this.iFrame).click()
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then((body) => cy.wrap(body));
  }
  clickButtonSpan() {
    //this.getiFrame().then((body) => {
      cy.get(this.searchIcon).click();
   // });
  }
}


export default RaiseDocument;


















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
    ButtonSpan=".button-inner"







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
        cy.get(':nth-child(5) > .dx-item-content').click({force:true})
    }
    selectform(){
        cy.get(this.form).type('Asset Test')
        cy.get('.dx-scrollview-content').contains('Asset Test').click({force:true})
    }
    clicksubmitButton(){
        cy.get(this.submitButton).click()
    }
     getiFrame() {
    return cy
      .get(this.iFrame)
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then((body) => cy.wrap(body));
  }
  clickButtonSpan() {
    this.getiFrame().find(this.ButtonSpan).click();
  }
}


export default RaiseDocument;


















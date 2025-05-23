class AddInspection{
    URL="https://www.datascopesystem.com/Assets_Staging/Frontend/addInspection"
    burgerMenu=".css-zvtom2 > .material-icons"
    sideNavbar="#side-nav_button_add-inspection"
    Asset=":nth-child(2) > .col-md-5 > .dx-field > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    inspectionDate="//input[@aria-haspopup='true']"
    inspectorName="//input[@role='textbox']"
    verdict="//*[@id='root']/div/div[3]/div/div/div/div/div[3]/div[2]/div/div[2]/div[1]/div"
    file=".dx-fileuploader-input-wrapper > .dx-widget > .dx-button-content"
    notes=".col-md-10 > .dx-field > .dx-field-value > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    submit=".col-md-10 > .MuiButtonBase-root"
    submitted = null;
    close=".css-1b172wj > .MuiButtonBase-root"


     openURL(){
        cy.visit(this.URL)
        cy.get(this.burgerMenu).click()
        cy.get(this.sideNavbar).click()
    }

    AddInspection(){
        cy.get(this.Asset).click()
        cy.contains('Loki Asset').click();
        cy.xpath(this.inspectionDate).invoke('val', '04/05/2025 06:18').trigger('change')
        cy.xpath(this.inspectorName).type('Loki QA')
        cy.xpath(this.verdict).click()
        cy.contains('Pass').should('be.visible').click();
        cy.get(this.file).selectFile('cypress/fixtures/Test 3.jpg', { action: 'drag-drop' });
        cy.get(this.notes).type('Loki Add Inspection QA Automation Note')
        cy.get(this.submit).click()
    }
    assetsvalidateSubmitted(){
        cy.xpath("//h2[contains(text(), 'INSPECTION SUBMITTED')]").should('be.visible').and('contain.text', 'INSPECTION SUBMITTED');

  }
  clickclose(){
    cy.get(this.close).click()
}
}

export default AddInspection
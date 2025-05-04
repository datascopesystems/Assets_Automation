class ManageInspections{


     Url="https://www.datascopesystem.com/Assets_Staging/Frontend/manageInspections"
     burgerMenu=".css-zvtom2 > .material-icons"
     sideNavbar="#side-nav_button_manage-inspection_button"
     asset=".dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
     From=":nth-child(2) > .dx-field > .dx-field-value > .dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
     To=":nth-child(3) > .dx-field > .dx-field-value > .dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
     Search=".col-md-1 > .MuiButtonBase-root"




     openUrl(){
        cy.visit(this.Url)
         }
         clickburgerMenu(){
            cy.get(this.burgerMenu).click()
         }
        
        clicksideNavbar(){
            cy.get(this.sideNavbar).click()
        }
        selectAsset(){
            cy.get(this.asset).click()
            cy.contains('Loki Asset').click();
        }
        selectFrom(){
            cy.get(this.From).invoke('val', '04/05/2025').trigger('change')
        }
        selectTo(){
            cy.get(this.To).invoke('val', '05/05/2025').trigger('change')
        }
        clcickSearch(){
            cy.get(this.Search).click()
        }

        }  
    
    export default ManageInspections





























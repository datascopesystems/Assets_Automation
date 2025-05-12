class ManageInspections{


     Url="https://www.datascopesystem.com/Assets_Staging/Frontend/manageInspections"
     burgerMenu=".css-zvtom2 > .material-icons"
     sideNavbar="#side-nav_button_manage-inspection_button"
     asset=".dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
     From=":nth-child(2) > .dx-field > .dx-field-value > .dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
     To=":nth-child(3) > .dx-field > .dx-field-value > .dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
     Search=".col-md-1 > .MuiButtonBase-root"
     viewFile="[aria-rowindex='1'] > .dx-command-edit > .dx-icon-file"
     scrollBar="#root > div > div.MuiContainer-root.css-tcvbxc > div > div > div > div:nth-child(2) > div > div > div.dx-datagrid-rowsview.dx-scrollable.dx-visibility-change-handler.dx-scrollable-both.dx-scrollable-simulated > div > div > div.dx-scrollable-scrollbar.dx-widget.dx-scrollbar-horizontal.dx-scrollbar-hoverable > div"




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
        clickscrollBar(){
            cy.get(this.scrollBar).scrollTo('left', { ensureScrollable: false });
        }
        clickviewFile(){
            cy.get(this.viewFile).click()

        } 
        }
    
    export default ManageInspections





























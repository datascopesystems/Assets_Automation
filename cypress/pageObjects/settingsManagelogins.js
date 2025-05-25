class SettingsManagelogin{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    settings="#root > div > div.MuiBox-root.css-i9gxme > header > div > div.MuiGrid-root.MuiGrid-container.css-f2pcil > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-10.MuiGrid-grid-lg-8.css-18yl3mt > div:nth-child(2) > span > button > span.MuiButton-icon.MuiButton-startIcon.MuiButton-iconSizeMedium.css-1l6c7y9"
    dropdown=":nth-child(1) > .css-tyn8o > :nth-child(3)" 
    manageLogin="body > div.MuiPopover-root.MuiMenu-root.MuiModal-root.css-1sucic7 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.css-67c3na > ul > ul:nth-child(1) > div:nth-child(3) > div > div > ul > li > div > span"
    searchName="[aria-colindex='3'] > .dx-editor-with-menu > .dx-editor-container > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    expand=".dx-data-row > .dx-command-expand"
    userRole=".MuiTabs-flexContainer > :nth-child(1)"
    adduserRole=":nth-child(2) > .dx-datagrid > .dx-datagrid-header-panel > .dx-toolbar > .dx-toolbar-items-container > .dx-toolbar-after > .dx-item > .dx-item-content > .dx-widget > .dx-button-content"
    selectadduserRole=".dx-editor-cell > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    assetTeam=".MuiTabs-flexContainer > :nth-child(2)"
    addassetTeam=":nth-child(2) > .dx-datagrid > .dx-datagrid-header-panel > .dx-toolbar > .dx-toolbar-items-container > .dx-toolbar-after > .dx-item > .dx-item-content > .dx-widget > .dx-button-content"
    homePage=".MuiTabs-flexContainer > :nth-child(3)"
    userhomePage=".dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    sethomePage=":nth-child(3) > .dx-item-content"
    submit=".col-md-1 > .MuiButtonBase-root"








openUrl(){
        cy.visit(this.url)
    }
    
    clicksettings(){
        cy.get(this.settings).click()
    }
    clickdropdown(){
        cy.get(this.dropdown).click()
    }
    clickmanageLogin(){
        cy.get(this.manageLogin).click()
    }
    entersearchName(){
        cy.get(this.searchName).type('lokesh.s_dev')
    }
    clickexpand(){
        cy.get(this.expand).click()
    }
    clickuserRole(){
        cy.get(this.userRole).click()
    }
    clickadduserRole(){
        cy.get(this.adduserRole).click()
    }
    clickSelectAddUserRole() {
    // Type 'all permissions' into the role selector input
    cy.get(this.selectadduserRole).clear().type('all permissions');

    // Wait for the dropdown to populate and ensure it contains 'all permissions'
    cy.contains('.dx-item-content', 'all permissions', { timeout: 5000 }).should('be.visible').click({ force: true });


    }
    clickassetTeam(){
        cy.get(this.assetTeam).click()
        
        
    }
    clickaddassetTeam(){
        cy.get(this.addassetTeam).type('all assets')
        cy.contains('.dx-item-content', 'all assets', { timeout: 5000 }).should('be.visible').click({ force: true });

    }
    clickhomePage(){
        cy.get(this.homePage).click()
    }
    clickuserhomePage(){
        cy.get(this.userhomePage).click().clear()
    }
    clicksethomePage(){
        cy.get(this.sethomePage).click({force:true})
    }
    clicksubmit(){
        cy.get(this.submit).click()
    }










}


export default SettingsManagelogin;
class AssetsGroupTable{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    manageAssetsURL="https://www.datascopesystem.com/Assets_Staging/Frontend/manageAssets"
    AssetsGroup="#manage-assets-table_rb_asset-group"
    AddAssetsGroup=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    typeAssetgroup=".dx-datagrid-validator > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    activegroupCheckbox=".dx-row-inserted > .dx-editor-inline-block > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon"
    create=".MuiDialogActions-root > :nth-child(2)"
    searchByID="[aria-colindex='1'] > .dx-editor-with-menu > .dx-editor-container > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    openAssetgroup="#manage-assets-table_s_set-show-master-detail > svg"
    sitedocuments="#asset-group-master-detail_dtb_site-document-types > div.dx-field-value > div > div > div > div.dx-texteditor-input-container.dx-tag-container"
    closePopup=".css-1b172wj > .MuiButtonBase-root"
    viewQR=".dx-data-row > .dx-command-edit"
    closeQR=".dx-popup-fullscreen > .dx-toolbar > .dx-toolbar-items-container > .dx-toolbar-after > .dx-item > .dx-item-content > .dx-widget > .dx-button-content"
    searchByName="#manage-assets-table_dt_asset-group > div > div.dx-datagrid-headers > div > table > tbody > tr.dx-row.dx-column-lines.dx-datagrid-filter-row > td:nth-child(2) > div > div.dx-editor-container > div > div > div.dx-texteditor-input-container > input"
    showInactive="#manage-assets-table_ds_set-inactive > div.dx-field-value > div > div > div > div > div.dx-switch-off"
    exportExcel="#manage-assets-table_dt_asset-group > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div"



    openUrl(){
        cy.visit(this.url)
        cy.url().should('eq', this.manageAssetsURL)
         cy.get(this.AssetsGroup).click()
    }
    clickAddAssetsGroup(){
       
        cy.get(this.AddAssetsGroup).click()
         cy.wait(1000)
        const uniqueName = `QA Automation-${Date.now()}`; // or use Cypress._.random() for shorter IDs
        cy.get('tr[aria-rowindex="1"]').eq(0) .find('td').eq(1).type(uniqueName);

        //cy.get('tr[aria-rowindex="1"]').eq(0).find('td').eq(1).type('test')//for Specific name 
        cy.wait(1000);
         cy.get('tr').eq(2).find('span[class="dx-checkbox-icon"]').eq(0).click()
        cy.get('tr').eq(2).find('span[class="dx-checkbox-icon"]').eq(1).click()
        cy.get('body').click(0, 0);
        cy.wait(1000)
        cy.get(this.create).click()
    }
    ManageAssetGroup(){
        cy.get(this.searchByID).type('129709')
        cy.wait(1000)
        //cy.get(this.searchByName).type('test')
        cy.get(this.openAssetgroup).click()
        cy.get(this.sitedocuments).click()
        cy.contains('.dx-item-content','Asset Test').should('be.visible').click({force:true})
        cy.get(this.closePopup).click()
        cy.wait(1000)
        cy.get(this.viewQR).click()
        cy.wait(1000)
        cy.get(this.closeQR).click()
        cy.get(this.showInactive).click()
        cy.get(this.exportExcel).click()
    }
    
    
}


export default AssetsGroupTable
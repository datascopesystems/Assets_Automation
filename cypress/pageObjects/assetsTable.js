// Import cypress-xpath to enable cy.xpath() usage
require('cypress-xpath');

class AssetsTable{
    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    manageAssetsURL="https://www.datascopesystem.com/Assets_Staging/Frontend/manageAssets"
    addAsset=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    activeCheckbox=".dx-row-inserted > [aria-describedby='dx-col-18'] > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon"
    location="//*[@id='manage-assets-table_dt_asset']/div/div[6]/div/table/tbody/tr[1]/td[11]"
    company="//*[@id='manage-assets-table_dt_asset']/div/div[6]/div/table/tbody/tr[1]/td[4]"
    assetGroup="//*[@id='manage-assets-table_dt_asset']/div/div[6]/div/table/tbody/tr[1]/td[3]/div/div[1]/div/div[2]/div[2]/div/div"
    ID="[aria-colindex='1'] > .dx-editor-with-menu > .dx-editor-container > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    openAsset="#manage-assets-table_s_show-master-detail-133511 > :nth-child(2)"
    Arrow="#manage-assets-table_s_show-master-detail-133511 > .svg-inline--fa > path"
    notes="#asset-details_dta_asset-notes > .dx-field-value > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    purchaseValue="#asset-details_dffi_purchase-value > .dx-field-value > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    saveDetails="#asset-details_db_save"
    assetFiles="#assets-master-details_t_files"
    fileUpload="#asset-file_fr_asset-files_file-uploader > .dx-fileuploader-wrapper > .dx-fileuploader-container > .dx-fileuploader-content > .dx-fileuploader-input-wrapper > .dx-widget > .dx-button-content"
    fileSave="#asset-file_fr_asset-files_data-button_save"
    images="#assets-master-details_t_images"
    imageUpload="#asset-images_dfu"
    inspection="#assets-master-details_t_inspection"
    inspectionSchedule="#asset-inspection-settings_dd_inspection-schedule > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    inspectionNotification="#asset-inspection-settings_dnb_notification-advance > .dx-field-value > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    inspectionDuration="#asset-inspection-settings_dnb_scheduled-duration > .dx-field-value > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    saveInspection="#asset-inspection-settings_db_save"
    operatingTme="#assets-master-details_t_operating-times"
    saveoperatingTime="#asset-operating-time_db_save-operating-time"
    bookableDetails="#assets-master-details_t_bookable-details"
    noticePeriod="#asset-bookable-details_dnb_notice-period > .dx-field-value > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    autoAccept="#asset-bookable-details_ds_auto-accept > .dx-field-value > .dx-show-invalid-badge > .dx-switch-wrapper > .dx-switch-container > .dx-switch-inner > .dx-switch-handle"
    savebookableDetails="#asset-bookable-details_db_save"
    customField="#assets-master-details_t_additional-fields"
    field1="#asset-additional-fields_dffi2_0 > :nth-child(2) > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    saveCustomfield="#asset-additional-fields-data_db_save"
    teams="#assets-master-details_t_teams"
    avilableTeams=".dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container"
    siteDocuments="#assets-master-details_t_site-documents"
    qrcode="#assets-master-details_t_qr-codes"
    qrGenerate="#asset-qr-code_db_save"
    siteTransfer="#assets-master-details_t_site-transfer"
    appStory="#assets-master-details_t_app-story"
    close=".css-1b172wj > .MuiButtonBase-root"
    exportExcel=":nth-child(3) > .dx-item-content > .dx-widget > .dx-button-content > .dx-icon"

    



    openUrl(){
        cy.visit(this.url)
    }
    AddAsset(){
        cy.get(this.addAsset).click()
        cy.wait(1000)
        const uniqueName = `QA Automation-${Date.now()}`; // or use Cypress._.random() for shorter IDs
        cy.get('tr[aria-rowindex="1"]').eq(0) .find('td').eq(1).type(uniqueName);

        //cy.get('tr[aria-rowindex="1"]').eq(0).find('td').eq(1).type('test')//for Specific name 
        cy.wait(1000);
        cy.get('tr').eq(2).find('span[class="dx-checkbox-icon"]').eq(1).click()
        cy.get('body').click(0, 0);
        cy.get('tr[aria-rowindex="1"]').eq(0).find('td').eq(10).type('Sivanadanoor Loke')

 
       cy.wait(1000)
        //cy.get(this.company).click() 
       // cy.xpath(this.company).type('ACOMPANY');
        cy.get('tr[aria-rowindex="1"]').eq(0).find('td').eq(3).type('ACOMPANY')
        cy.contains('div.dx-item-content.dx-list-item-content', 'ACOMPANY').should('be.visible').click({force:true}) 
        cy.get('tr[aria-rowindex="1"]').eq(0).find('td').eq(2).type('AprilDemoGroup / April DemoType')
        cy.contains('div.dx-item-content.dx-list-item-content', 'AprilDemoGroup / April DemoType').should('be.visible').click({force:true});
        cy.get('body').click(0, 0); 

    }
    enterAssetDetails(){
        cy.get(this.ID).type('133511')
        cy.get(this.openAsset).click()
        cy.get(this.Arrow).click()
        cy.get(this.notes).type('This is a test note')
        cy.get(this.purchaseValue).clear().type('1000')
        cy.get(this.saveDetails).click()
    }
    addAssetFiles(){
        cy.get(this.assetFiles).click()
        cy.wait(5000)
        cy.get(this.fileUpload).selectFile('cypress/fixtures/Test 3.jpg', { action: 'drag-drop' });
        cy.get(this.fileSave).click()
    }
    addAssetImages(){
        cy.get(this.images).click()
        cy.get(this.imageUpload).selectFile(['cypress/fixtures/Test 3.jpg','cypress/fixtures/Test 3.jpg','cypress/fixtures/Test 3.jpg'], { action:'drag-drop'})
    }
    addAssetInspection(){
        cy.get(this.inspection).click()
        cy.get(this.inspectionSchedule).click()
        cy.get(':nth-child(4) > .dx-item-content').click()
        //cy.contains('monthly').should('be.visible').click();
        cy.get(this.inspectionNotification).type('3')
        cy.get(this.inspectionDuration).type('30')
        cy.get(this.saveInspection).click()
    }
    addOperatingTime(){
        cy.get(this.operatingTme).click()
        cy.get(this.saveoperatingTime).click()
    }
    addBookableDetails(){
        cy.get(this.bookableDetails).click()
        cy.get(this.noticePeriod).type('1')
        cy.get(this.autoAccept).click()
        cy.get(this.savebookableDetails).click()
    }
    addCustomField(){
        cy.get(this.customField).click()
        cy.get(this.field1).type('Test 1')
        cy.get(this.saveCustomfield).click()
    }
    clickteams(){
        cy.get(this.teams).click()
        cy.get(this.avilableTeams).type('all assets')
        cy.get('.dx-scrollview-content > :nth-child(1) > .dx-item-content').click({force:true})
    }
    clicksiteDocuments(){
        cy.get(this.siteDocuments).click()
    }
    clcikqrcode(){
        cy.get(this.qrcode).click()
    }
    clickqrGenerate(){
        cy.get(this.qrGenerate).click()
    }
    addSiteTransfer(){
        cy.get(this.siteTransfer).click()
    }
    clickAppStory(){
        cy.get(this.appStory).click()
    }
    clickclose(){
        cy.get(this.close).click()
    }
    clickexportExcel(){
        cy.get(this.exportExcel).click()
    }

    

























} 
export default AssetsTable
//test push
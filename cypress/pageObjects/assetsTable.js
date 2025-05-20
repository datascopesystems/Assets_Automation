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
    close=".css-1b172wj > .MuiButtonBase-root"
    exportExcel=":nth-child(3) > .dx-item-content > .dx-widget > .dx-button-content > .dx-icon"

    



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
        cy.get(this.ID).type('133511')
    }
    selectopenAsset(){
        cy.get(this.openAsset).click()
    }
    clickArrow(){
        cy.get(this.Arrow).click()
    }
    enternotes(){
        cy.get(this.notes).type('This is a test note')
    }
    enterpurchaseValue(){
        cy.get(this.purchaseValue).clear().type('1000')
    }
    clicksaveDetails(){
        cy.get(this.saveDetails).click()
    }
    selectassetFiles(){
        cy.get(this.assetFiles).click()
    }
    selectfileUpload(){
        cy.get(this.fileUpload).selectFile('cypress/fixtures/Test 3.jpg', { action: 'drag-drop' });
        
    }
    clickfileSave(){
        cy.get(this.fileSave).click()
    }
    clickimages(){
        cy.get(this.images).click()
    }
    clickimageUpload(){
        cy.get(this.imageUpload).selectFile(['cypress/fixtures/Test 3.jpg','cypress/fixtures/Test 3.jpg','cypress/fixtures/Test 3.jpg'], { action:'drag-drop'})
    }
    clickinspection(){
        cy.get(this.inspection).click()
    }
    selectinspectionSchedule(){
        cy.get(this.inspectionSchedule).click()
        cy.get(':nth-child(4) > .dx-item-content').click()
        //cy.contains('monthly').should('be.visible').click();
    }
    enterinspectionNotification(){
        cy.get(this.inspectionNotification).type('3')
    }
    enterinspectionDuration(){
        cy.get(this.inspectionDuration).type('30')
    }
    clicksaveInspection(){
        cy.get(this.saveInspection).click()
    }
    clickoperatingTime(){
        cy.get(this.operatingTme).click()
    }
    clicksaveoperatingTime(){
        cy.get(this.saveoperatingTime).click()
    }
    clickbookableDetails(){
        cy.get(this.bookableDetails).click()
    }
    enternoticePeriod(){
        cy.get(this.noticePeriod).type('1')
    }
    clickautoAccept(){
        cy.get(this.autoAccept).click()
    }
    clicksavebookableDetails(){
        cy.get(this.savebookableDetails).click()
    }
    clickcustomField(){
        cy.get(this.customField).click()
    }
    enterfield1(){
        cy.get(this.field1).type('Test 1')
    }
    clicksaveCustomfield(){
        cy.get(this.saveCustomfield).click()
    }
    clickteams(){
        cy.get(this.teams).click()
    }
    clickavailableTeams(){
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
    clickclose(){
        cy.get(this.close).click()
    }
    clickexportExcel(){
        cy.get(this.exportExcel).click()
    }

    

























} 
export default AssetsTable
//test push
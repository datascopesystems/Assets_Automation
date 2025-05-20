class AssetsRegistration {

    
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    url="https://www.datascopesystem.com/Assets_Staging/Frontend/registerAsset"
    burgerMenu=".css-zvtom2"
    navBar="#side-nav_button_asset-registration"
    AssetsRegistrationURL="https://www.datascopesystem.com/Assets_Staging/Frontend/registerAsset"
    assetGroup="#asset-registration_dd_asset-group > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    Reg="#asset-registration_dffi_reg"
    Location="#asset-registration_dffi_location"
    Manufacturer="#asset-registration_dffi_manufacturer"
    assetsType="#asset-registration_dd_asset-types > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    companyName="#asset-registration_dd_company > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    acquiredDate="#asset-registration_dp_acquired-date > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    hiredStatus="#asset-registration_dd_hiredpurchase_status > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    condition="#asset-registration_dd_condition > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    availability="#asset-registration_dd_availability > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
   urlField="#asset-registration_dffi_url > .dx-field-value > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
   customField1="#asset-registration_dffi2_custom-field-0 > :nth-child(2) > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
   customField2="#asset-registration_dffi2_custom-field-1 > :nth-child(2) > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
   inspectionSchedule="#asset-registration_dd_inspection-schedule > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
   inspectionDate="#asset-registration_dp_last-inspection-date > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
   assetfileUpload="#asset-registration_fr_asset-file_file-uploader"
   additionalFile1="#asset-registration_fr-154_file-uploader"
   additionalFile2="#asset-registration_fr-156_file-uploader"
   additionalFile3="#asset-registration_fr-155_file-uploader"
   submit="#asset-registration_db_submit"
   validatePending=".MuiTypography-root MuiTypography-h6 MuiDialogTitle-root css-1g5a8n9"


    


    openurl(){
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

    clickBurgerMenu(){
        cy.get(this.burgerMenu).click()
    }

    clickNavBar(){
        cy.get(this.navBar).click()
    }
    
    validateAssetsRegistration(){
            cy.url().should('eq', this.AssetsRegistrationURL)
    }
    selectassetGroup(){
        cy.get(this.assetGroup).type('Drive Meadow ')
        cy.get(':nth-child(8) > .dx-item-content').click()
        cy.wait(5000)
    }

    enterReg(){
            cy.get(this.Reg).click().type('LokiKM67CF')
    }
    enterLocation(){
            cy.get(this.Location).click().type('Chennai')
    }
    enterManufacturer(){
            cy.get(this.Manufacturer).click().type('Nissan')
    }

    selectAssetsType(){
        cy.get(this.assetsType) .type('Loki Asset')
        cy.get(':nth-child(10) > .dx-item-content').click()
    
}
    selectcompanyname(){
        cy.get(this.companyName).type('DATASCOPE')
        //cy.contains('div', 'DATASCOPE').should('be.visible').click({ force: true });
        cy.get(':nth-child(64) > .dx-item-content').click()
        cy.wait(5000)
               
    }
    selectacquiredDate(){
        cy.get(this.acquiredDate).invoke('val', '30/04/2025').trigger('change')
    }
    selecthiredStatus(){
        cy.get(this.hiredStatus).type('Hired')
        cy.get('.dx-item-content').contains('Hired').click()
    }
    selectcondition(){
        cy.get(this.condition).type('Good')
        cy.get('.dx-item-content').contains('Good').click()
    }
    selectavailability(){
        cy.get(this.availability).type('Available')
        cy.get('.dx-item-content').contains('Available').click()
    }
    enterurlField(){
        cy.get(this.urlField).type('www.google.com')
        cy.wait(2000)
        
    }
    entercustomField1(){
        cy.get(this.customField1).type('Custom Field One')
    }
    entercustomField2(){
        cy.get(this.customField2).type('Custom Field Two')
    }
    chooseinspectionSchedule(){
        cy.get(this.inspectionSchedule).type('Monthly')
        cy.get('.dx-item-content').contains('Monthly').click()
    }
    chooseinspectionDate(){
        cy.get(this.inspectionDate).invoke('val', '30/04/2025').trigger('change')
    }
    
    selectAssetFileUpload() {
        cy.get(this.assetfileUpload).within(() => {
            cy.get('.dx-fileuploader-input-wrapper > .dx-widget').selectFile('cypress/fixtures/Test 3.jpg', { action: 'drag-drop' });
        })

    }
    selectadditionalFile1() {
        cy.get(this.additionalFile1).within(() => {
            cy.get('.dx-fileuploader-input-wrapper > .dx-widget').selectFile('cypress/fixtures/Test 3.jpg', { action: 'drag-drop' });
        })

    }
    selectadditionalFile2() {
        cy.get(this.additionalFile2).within(() => {
            cy.get('.dx-fileuploader-input-wrapper > .dx-widget').selectFile('cypress/fixtures/TEST.docx', { action: 'drag-drop' });
        })

    }
    selectadditionalFile3() {
        cy.get(this.additionalFile3).within(() => {
            cy.get('.dx-fileuploader-input-wrapper > .dx-widget').selectFile('cypress/fixtures/test.pdf', { action: 'drag-drop' });
        })

    }
    clicksubmit(){
        cy.get(this.submit).click()
        cy.wait(5000)

    }
    

    assetsvalidatePending(){
        cy.xpath("//h2[contains(text(), 'ASSET PENDING REVIEW')]").should('be.visible').and('contain.text', 'ASSET PENDING REVIEW');

       
    }

    
    
    



    }
    
    
    



export default AssetsRegistration
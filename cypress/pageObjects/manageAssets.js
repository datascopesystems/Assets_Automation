class ManageAssets{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    manageAssetsURL="https://www.datascopesystem.com/Assets_Staging/Frontend/manageAssets"
    AssetsGroup="#manage-assets-table_rb_asset-group"
    AddAssetsGroup=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    typeAssetgroup=".dx-datagrid-validator > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    activegroupCheckbox=".dx-row-inserted > .dx-editor-inline-block > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon"
    radiobuttonAssets="#manage-assets-table_rb_assets > .MuiButtonBase-root > .PrivateSwitchBase-input"
    addAsset=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    activeassetCheckbox=".dx-row-inserted > [aria-describedby='dx-col-75'] > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon"
    location=".dx-row-inserted > [aria-describedby='dx-col-69']"
    company=".dx-row-inserted > [aria-describedby='dx-col-62']"
    assetGroup=".dx-row-inserted > [aria-describedby='dx-col-61']"



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
    
    validateManageAssets(){
        cy.url().should('eq', this.manageAssetsURL)
    }
    clickAssetsGroup(){
        cy.get(this.AssetsGroup).click()
    }
    clickAddAssetsGroup(){
        cy.get(this.AddAssetsGroup).click()
    }
    entertypeAssetgroup(){
        cy.get(this.typeAssetgroup).type('QA Loki Automation')
    }
    selectactivegroupCheckbox(){
        cy.get(this.activegroupCheckbox).click({force:true})
        cy.get('body').click(0, 0);
        cy.wait(5000)
    }
    selectradiobuttonAssets(){
        cy.get(this.radiobuttonAssets).click()
        cy.wait(1000)
    }
    clickaddAsset(){
        cy.get(this.addAsset).type('QA Auto Asset')
        cy.get('.dx-focused > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('QA Auto Asset')
    }
    clickactiveassetCheckbox(){
        cy.get(this.activeassetCheckbox).click({force:true})
        cy.get('body').click(0, 0);
    }
    enterlocation(){
        cy.get(this.location).type('Sivanadanoor')
        cy.get('body').click(0, 0);
        
    }
    selectcompany(){
        cy.get(this.company).click() // Open the dropdown
        cy.get(this.company).type('ACOMPANY') // Type the company name
        cy.contains('ACOMPANY').click({ force: true }) // Select the company from the dropdown
        cy.get('body').click(0, 0); // Click outside to close the dropdown
    }
    selectassetGroup(){
        cy.get(this.assetGroup).click()
        cy.get(this.assetGroup).type('AprilDemoGroup / April DemoType')
        cy.contains('AprilDemoGroup / April DemoType').click({ force: true }) // Select the company from the dropdown
        cy.get('body').click(0, 0); 

}
}

export default ManageAssets
class AssetsTable{
    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    manageAssetsURL="https://www.datascopesystem.com/Assets_Staging/Frontend/manageAssets"
    addAsset=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    activeCheckbox=".col"
    location=".dx-row-inserted > [aria-describedby='dx-col-11']"
    company=".dx-row-inserted > [aria-describedby='dx-col-4']"
    assetGroup=".dx-row-inserted > [aria-describedby='dx-col-3']"
    ID="[aria-colindex='1'] > .dx-editor-with-menu > .dx-editor-container > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    openAsset="#manage-assets-table_s_show-master-detail-133452 > :nth-child(2)"
    Arrow="#manage-assets-table_s_show-master-detail-133452 > .svg-inline--fa > path"
    
    



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
       // cy.get(this.addAsset).type('QA Auto Asset')
        cy.get('.dx-focused > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('QA Auto Asset')
        cy.xpath('//*[@id="manage-assets-table_dt_asset"]/div/div[6]/div/table/tbody/tr').each(($row) => {
            if ($row.text().includes('QA Auto Asset')) {
            cy.wrap($row)
            .find('td')
            .eq(14) // 13th column, since index starts from 0
            .find('div div span') // adjust if checkbox is implemented differently
            .click(); // or .click() based on how your checkbox works
            }
            });
    }
    clickactiveCheckbox(){
        cy.get(`${this.activeCheckbox} thead tr`).then($rows => {
            const headers = $rows.find('th');
            const index = [...headers].findIndex(el => el.innerText.trim() === 'Is Active');
            if (index === -1) throw new Error('"Is Active" column not found');
            cy.get(`thead tr:nth-child(2) .dx-datagrid-checkbox-size.dx-checkbox`).eq(index).click({ force: true });
         })
        //cy.get(this.activeCheckbox).contains('Is Active').click({ force: true });
        //cy.get('thead tr:nth-child(2) .dx-datagrid-checkbox-size.dx-checkbox')
  

        //cy.get('body').click(0, 0);
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
    enterID(){
        cy.get(this.ID).type('133452')
    }
    selectopenAsset(){
        cy.get(this.openAsset).click()
    }
    clickArrow(){
        cy.get(this.Arrow).click()
    }

























} 
export default AssetsTable
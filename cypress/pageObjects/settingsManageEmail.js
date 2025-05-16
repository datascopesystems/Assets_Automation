class SettingsManageEmail{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    settings="#root > div > div.MuiBox-root.css-i9gxme > header > div > div.MuiGrid-root.MuiGrid-container.css-f2pcil > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-10.MuiGrid-grid-lg-8.css-18yl3mt > div:nth-child(2) > span > button > span.MuiButton-icon.MuiButton-startIcon.MuiButton-iconSizeMedium.css-1l6c7y9"
    dropdown=":nth-child(1) > .css-tyn8o > :nth-child(3)" 
    manageEmail=":nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    addnotificationEmail=".dx-item-content > .dx-widget > .dx-button-content"
    notificationType=".dx-editor-cell > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    dropdownType=":nth-child(4) > .dx-item-content"
    email="tr.dx-row-inserted"
    assetType="tr.dx-row-inserted"






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
    
    clicksettings(){
        cy.get(this.settings).click()
    }
    clickdropdown(){
        cy.get(this.dropdown).click()
    }
    clickmanageEmail(){
        cy.get(this.manageEmail).click()
    }
    clickaddnotificationEmail(){
        cy.get(this.addnotificationEmail).click()
    }
    clicknotificationType(){
         cy.get(this.notificationType).click()
    }
    clickdropdownType(){
         cy.get(this.dropdownType).click()
    }
    enteremail(){
       cy.get('tr.dx-row-inserted').find('td').eq(1).click() // Email column
       .then(() => {
       cy.get(this.email).find('td').eq(1).find('input.dx-texteditor-input') .should('have.length', 1).type('qa@datascopeplc.com'); // optional safety check
 
    });
   }
    selectassetType(){
        cy.get('tr.dx-row-inserted').find('td').eq(2).click() // Assettype column

        .then(() => {
        cy.get(this.email).find('td').eq(2).find('input.dx-texteditor-input').type('Loki Asset')
        cy.get('.dx-overlay-content').contains('Loki Asset').click({ force: true });//code for select first option from multiple option 
        cy.get('body').click(0, 0); 
  });
    


  }
  }
export default SettingsManageEmail;





















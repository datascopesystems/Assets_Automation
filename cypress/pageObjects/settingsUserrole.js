class SettingsUserrole{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    settings="#root > div > div.MuiBox-root.css-i9gxme > header > div > div.MuiGrid-root.MuiGrid-container.css-f2pcil > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-10.MuiGrid-grid-lg-8.css-18yl3mt > div:nth-child(2) > span > button > span.MuiButton-icon.MuiButton-startIcon.MuiButton-iconSizeMedium.css-1l6c7y9"
    dropdown=":nth-child(1) > .css-tyn8o > :nth-child(3)" 
    userRole="//span[text()='Manage User Roles']"
    adduserRole=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    checkbox=".dx-row-inserted > .dx-editor-inline-block > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon"







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
    clickuserRole(){
        cy.xpath(this.userRole).click()
    }
    clickadduserRole(){
        cy.get(this.adduserRole).type('QA Auto role')
    }
    clickcheckbox(){
        cy.get(this.checkbox).click()
         cy.get('body').click(0, 0);
    }
}


export default SettingsUserrole;


















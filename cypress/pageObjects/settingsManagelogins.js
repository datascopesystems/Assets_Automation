class SettingsManagelogin{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
    settings="#root > div > div.MuiBox-root.css-i9gxme > header > div > div.MuiGrid-root.MuiGrid-container.css-f2pcil > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-10.MuiGrid-grid-lg-8.css-18yl3mt > div:nth-child(2) > span > button > span.MuiButton-icon.MuiButton-startIcon.MuiButton-iconSizeMedium.css-1l6c7y9"
    dropdown=":nth-child(1) > .css-tyn8o > :nth-child(3)" 
    manageLogin="body > div.MuiPopover-root.MuiMenu-root.MuiModal-root.css-1sucic7 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.css-67c3na > ul > ul:nth-child(1) > div:nth-child(3) > div > div > ul > li > div > span"








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
    clickmanageLogin(){
        cy.xpath(this.manageLogin).click()
    }












}
export default SettingsManagelogin;
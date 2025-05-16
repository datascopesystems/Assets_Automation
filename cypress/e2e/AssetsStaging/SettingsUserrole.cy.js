import SettingsUserrole from "../../pageObjects/settingsUserrole";

describe('Settings Userrole', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit the Raise Document page', () => {
        //cy.Login()
        const user = new SettingsUserrole()
        user.openUrl()
        //user.enterUsername()
        //user.enterPassword()
       // user.clickLogin()
       user.clicksettings()
       user.clickdropdown()
       user.clickuserRole()
       user.clickadduserRole()
       user.clickcheckbox()
       
        })
    })
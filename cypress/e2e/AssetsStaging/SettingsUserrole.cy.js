import SettingsUserrole from "../../pageObjects/settingsUserrole";

describe('Settings Userrole', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit the Raise Document page', () => {
        const user = new SettingsUserrole()
        user.openUrl()
       user.clicksettings()
       user.clickdropdown()
       user.clickuserRole()
       user.clickadduserRole()
       user.clickcheckbox()
       
        })
    })
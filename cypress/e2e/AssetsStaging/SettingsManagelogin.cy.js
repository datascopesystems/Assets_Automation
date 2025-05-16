//import { use } from 'react';
import SettingsManagelogin from '../../pageObjects/settingsManagelogins';
describe('Settings Managelogin', () => {
    
    Cypress.on('uncaught:exception', (_err, _runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit Managelogin', () => {
        //cy.Login()
        const userLogin = new SettingsManagelogin()
        userLogin.openUrl()
        //user.enterUsername()
        //user.enterPassword()
       // user.clickLogin()
       userLogin.clicksettings()
       userLogin.clickdropdown()
       userLogin.clickmanageLogin()
       userLogin.entersearchName()
       cy.wait(5000)
       userLogin.clickexpand()
       userLogin.clickuserRole()
       userLogin.clickadduserRole()
       userLogin.clickSelectAddUserRole()
       userLogin.clickassetTeam()
       cy.wait(2000)
       userLogin.clickaddassetTeam()
      // userLogin.clickhomePage()
       //userLogin.clickuserhomePage()
       //userLogin.clicksethomePage()
      // userLogin.clicksubmit()
    })
    })

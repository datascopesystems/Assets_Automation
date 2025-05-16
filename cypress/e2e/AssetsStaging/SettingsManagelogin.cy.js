import SettingsManagelogin from '../../pageObjects/settingsManagelogin';
describe('Settings Managelogin', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
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
       userLogin.clicksetting()
       userLogin.clickdropdown()
       userLogin.clickManagelogin()
    })
    })

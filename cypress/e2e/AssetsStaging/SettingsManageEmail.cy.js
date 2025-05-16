import SettingsManageEmail from "../../pageObjects/settingsManageEmail";


describe('Settings Managelogin', () => {
    
    Cypress.on('uncaught:exception', (_err, _runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit Managelogin', () => {
        //cy.Login()
        const userEmail = new SettingsManageEmail()
        userEmail.openUrl()
        //userEmail.enterUsername()
        //userEmail.enterPassword()
        //userEmail.clickLoginButton()
        userEmail.clicksettings()
        userEmail.clickdropdown()
        userEmail.clickmanageEmail()
        userEmail.clickaddnotificationEmail()
        userEmail.clicknotificationType()
        userEmail.clickdropdownType()
        userEmail.enteremail()
        userEmail.selectassetType()
    })
    })

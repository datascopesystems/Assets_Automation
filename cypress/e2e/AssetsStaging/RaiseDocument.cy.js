import RaiseDocument from "../../pageObjects/raiseDocument";

describe('Raise Document', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit the Raise Document page', () => {
        //cy.Login()
        const document = new RaiseDocument()
        document.openUrl()
        //document.enterUsername()
        //document.enterPassword()
       // document.clickLogin()
        document.clickraiseDocument()
        document.selectgroup()
        document.selectform()
        document.clicksubmitButton()
        cy.wait(10000)
        document.clickButtonSpan()
        })
    })

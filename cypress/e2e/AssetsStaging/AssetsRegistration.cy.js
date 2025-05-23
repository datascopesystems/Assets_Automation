import  AssetsRegistration from "../../pageObjects/assetsRegistration"

describe('Assets Regisration', () => {
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit the Assets Registration page', () => {
        const assets = new AssetsRegistration()
        assets.openurl()
        assets.FillAssetDetails()
        assets.chooseinspectionSchedule()
        assets.selectAssetFileUpload()
        assets.selectadditionalFiles()
        assets.clicksubmit()
        cy.wait(5000)
        assets.assetsvalidatePending()

        
    })
    })


import  AssetsRegistration from "../../pageObjects/assetsRegistration"

describe('Assets Regisration', () => {
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit the Assets Registration page', () => {
        //cy.Login()
        //cy.fixture('loginDetails').then(function(data){
        const assets = new AssetsRegistration()
        assets.openwebsite()
        assets.clickBurgerMenu()
        assets.clickNavBar()
        assets.validateAssetsRegistration()
       // assets.selectassetGroup()
        assets.enterReg()
        assets.enterLocation()
        assets.enterManufacturer()
        assets.selectAssetsType()
        cy.wait(5000)
        assets.selectcompanyname()
        assets.selectacquiredDate()
        assets.selectavailability()
        assets.selecthiredStatus()
        assets.selectcondition()
        assets.enterurl()
        assets.entercustomField1()
        assets.entercustomField2()
        assets.chooseinspectionSchedule()
        assets.chooseinspectionDate()
        assets.selectAssetFileUpload()
        assets.selectadditionalFile1()
        assets.selectadditionalFile2()
        assets.selectadditionalFile3()
        assets.clicksubmit()
        cy.wait(5000)
        assets.assetsvalidatePending()

        
    })
})


//test new code
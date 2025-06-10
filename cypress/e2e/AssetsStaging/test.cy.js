import * as  pageObjects from '../../pageObjects' 

describe('Asset Test Suite', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('step 1: should visit the Manage Assets Group Table page', () => {
        const assetGroup = new  pageObjects.AssetsGroupTable()
        assetGroup.openUrl()
        cy.wait(1000)
        //assetGroup.clickAddAssetsGroup()
        assetGroup.ManageAssetGroup()
        // assetGroup.entertypeAssetgroup()
        // assetGroup.selectactivegroupCheckbox()
        // cy.wait(5000)
        // assetGroup.selectradiobuttonAssets()
        // assetGroup.clickaddAsset()
        // assetGroup.clickactiveassetCheckbox()
        // assetGroup.enterlocation()
        // assetGroup.selectcompany()
        // assetGroup.selectassetGroup()
         })
     it('step 2: should visit the Manage Assets Table page', () => {
        const assetsTables = new pageObjects.AssetsTable()
        assetsTables.openUrl()
        assetsTables.AddAsset()
        // assetsTables.enterAssetDetails()
        // cy.wait(1000)
        // assetsTables.addAssetFiles()
        // assetsTables.addAssetImages()
        // cy.wait(5000)
        // assetsTables.addAssetInspection()
        // assetsTables.addOperatingTime()
        // assetsTables.addBookableDetails()
        // assetsTables.addCustomField()
        // assetsTables.clickteams()
        // cy.wait(5000)
        // assetsTables.clicksiteDocuments()
        // assetsTables.clcikqrcode()
        // assetsTables.clickqrGenerate()
        // assetsTables.addSiteTransfer()
        // assetsTables.clickAppStory()
        // assetsTables.clickclose()
        // assetsTables.clickexportExcel()

    })
    it('step 3: should display asset types table', () => {
        const assettypesTable = new pageObjects.AssettypesTable();
        assettypesTable.openUrl();
        assettypesTable.validateAssetsTable();
        assettypesTable.clickassettypeRadio();
        assettypesTable.entersearchByID();
        cy.wait(1000);
        assettypesTable.clickimportAssets();
        cy.wait(1000);
        assettypesTable.getcompany();
        cy.wait(1000);

        // Uncomment and use cy.task to fetch excelData
        cy.task('readExcel', {
            filePath: 'cypress/fixtures/Import Assets.xlsx',
            sheetName: 'Sheet1',
        }).then((excelData) => {
            assettypesTable.pasteExcelData(excelData);
        });
        })

    it('step 4: should visit the Add Inspection Page', () => {
        const inspection = new pageObjects.AddInspection()
        inspection.openURL()
        inspection.AddInspection()
        inspection.assetsvalidateSubmitted()
        inspection.clickclose()
    })

    it('step 5: should visit the Manage Inspections Page', () => {
        const manage = new pageObjects.ManageInspections()
        manage.openUrl()
        manage.selectAsset()
        manage.selectFrom()
        manage.selectTo()
        manage.clcickSearch()
        cy.wait(2000) 
        manage.clickscrollBar()
        manage.clickviewFile()
    })

    it('step 6: should visit the Assets Registration page', () => {
        const assets = new pageObjects.AssetsRegistration()
        assets.openurl()
        assets.FillAssetDetails()
        assets.chooseinspectionSchedule()
        assets.selectAssetFileUpload()
        assets.selectadditionalFiles()
        assets.clicksubmit()
        cy.wait(5000) 
        assets.assetsvalidatePending()
    })

    it('step 7: should visit the Request Booking page', () => {
        const requestBooking = new pageObjects.requestBooking()
        requestBooking.openUrl()
        cy.wait(2000) 
        requestBooking.selectAsset()
        requestBooking.selectPreferredDate()
        requestBooking.enterDuration()
        requestBooking.enterContactInformation()
        requestBooking.enterNotes()
        requestBooking.clicksubmit()
        requestBooking.assetsvalidateBooking()
        requestBooking.clickclose()
    })

it('step 8: should visit the Manage Booking page', () => {
    
        const manageBookings = new pageObjects. ManageBooking()
        manageBookings.openUrl()
        manageBookings.chooseTo()
        manageBookings.clickSearch()
        cy.wait(5000)
        manageBookings.generateReport()
        })
    it('step 9: should visit the Raise Document page', () => {
        const document = new pageObjects. RaiseDocument()
        document.openUrl()
        cy.wait(2000)
        document.clickraiseDocument()
        document.selectgroup()
        document.selectform()
        document.clicksubmitButton()
        //cy.wait(10000)
        //document.getiFrame()
        //document.clickButtonSpan()
        })
    })
    it('step 10: should visit ManageEmail', () => {
        const userEmail = new pageObjects.SettingsManageEmail()
        userEmail.openUrl()
        userEmail.clicksettings()
        userEmail.clickdropdown()
        userEmail.clickmanageEmail()
        userEmail.clickaddnotificationEmail()
        userEmail.clicknotificationType()
        userEmail.clickdropdownType()
        userEmail.enteremail()
        userEmail.selectassetType()
    })
     it('step 11: should visit Managelogin', () => {
        const userLogin = new pageObjects.SettingsManagelogin()
        userLogin.openUrl()
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
        
it('step 12: should visit ManageUserRole', () => {
        const user = new pageObjects.SettingsUserrole()
        user.openUrl()
        user.clicksettings()
        user.clickdropdown()
        user.clickuserRole()
        user.clickadduserRole()
        user.clickcheckbox()
       
        })
 it('step 13: should visit the Booking Schedule page', () => {
        //cy.fixture('loginDetails').then(function(){
        const bookingSchedules = new pageObjects.BookingSchedule()
        bookingSchedules.openUrl()
        bookingSchedules.clickBurgerMenu()
        bookingSchedules.clickNavBar()
        bookingSchedules.clickaddIcon()
        bookingSchedules.getmultiIcons()
        cy.wait(1000)
        bookingSchedules.clickAddBooking()
            
            
        })
        it.only('checking site transfer', () => {
            const transfer = new pageObjects.SiteTransfer()
            transfer.openUrl()
            cy.wait(1000)
            //transfer.clickAddAssetsGroup()
            transfer.checktransfer()
            transfer.searchAcrossPages("loki",[0,1,2])
        })
    



    
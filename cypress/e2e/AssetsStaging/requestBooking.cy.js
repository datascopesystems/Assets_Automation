import RequestBooking from "../../pageObjects/requestBooking";


describe('Request Booking', () => {
    it('should visit the Request Booking page', () => {
        cy.fixture('loginDetails').then(function(data){
            const requestBooking = new RequestBooking()
            requestBooking.openUrl()
            requestBooking.enterUsername(data.userName)
            requestBooking.enterPassword(data.password)
            requestBooking.clickLoginButton()
            requestBooking.clickBurgerMenu()
            requestBooking.clickNavBar()
            requestBooking.validateRequestBooking()
            requestBooking.selectAsset()
            requestBooking.selectPreferredDate()
            requestBooking.enterDuration()
            requestBooking.enterContactName()
            requestBooking.enterContactNumber()
            requestBooking.enterEmail()
            requestBooking.enterNotes()
            requestBooking.selectCompanyName()


        })
        
    })
})
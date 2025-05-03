import BookingSchedule from "../../pageObjects/bookingSchedule";
describe('Booking Schedule', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });

    it('should visit the Booking Schedule page', () => {
        cy.fixture('loginDetails').then(function(){
            const bookingSchedules = new BookingSchedule()
            bookingSchedules.openUrl()
            //manageBookings.enterUsername()
            //manageBookings.enterPassword()
            //manageBookings.clickLoginButton()
            bookingSchedules.clickBurgerMenu()
            bookingSchedules.clickNavBar()
            bookingSchedules.clickaddIcon()
            bookingSchedules.getmultiIcons()
            bookingSchedules.clickAddBooking()
            bookingSchedules.selectbookableAsset()
            bookingSchedules.setbookingDate()
            bookingSchedules.selectcompany()
            bookingSchedules.enterduration()
            bookingSchedules.entercontactName()
            bookingSchedules.entercontactNo()
            bookingSchedules.enteremail()
            bookingSchedules.enternotes()
            bookingSchedules.clicksubmit()
            
        })
    })
})
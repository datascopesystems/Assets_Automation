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
            bookingSchedules.clickBurgerMenu()
            bookingSchedules.clickNavBar()
            bookingSchedules.clickaddIcon()
            bookingSchedules.getmultiIcons()
            cy.wait(1000)
            bookingSchedules.clickAddBooking()
            
            
        })
    })
})
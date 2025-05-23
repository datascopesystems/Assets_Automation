import ManageBooking from "../../pageObjects/manageBooking";
describe('Manage Booking', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('should visit the Manage Booking page', () => {
    
            const manageBookings = new ManageBooking()
            manageBookings.openUrl()
            manageBookings.chooseTo()
            manageBookings.clickSearch()
            cy.wait(5000)
            manageBookings.generateReport()
        })
    })









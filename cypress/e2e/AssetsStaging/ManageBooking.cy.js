import ManageBooking from "../../pageObjects/manageBooking";
describe('Manage Booking', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
    it('should visit the Manage Booking page', () => {
        cy.Login()
       // cy.fixture('loginDetails').then(function(){
            const manageBookings = new ManageBooking()
            manageBookings.openUrl()
            //manageBookings.enterUsername()
            //manageBookings.enterPassword()
            //manageBookings.clickLoginButton()
            manageBookings.clickBurgerMenu()
            manageBookings.clickNavBar()
            manageBookings.chooseTo()
            manageBookings.clickSearch()
            cy.wait(5000)
            manageBookings.generateReport()
        })
    })
after(() =>{
    cy.task('sendMail', 'Test Report'),
    console.log('Email sent:',result)
});









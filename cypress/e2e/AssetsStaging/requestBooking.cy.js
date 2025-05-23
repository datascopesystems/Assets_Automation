import RequestBooking from "../../pageObjects/requestBooking";


describe('Request Booking', () => {
     Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('should visit the Request Booking page', () => {
    
            const requestBooking = new RequestBooking()
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
        
    })

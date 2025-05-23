class RequestBooking {

    url="https://www.datascopesystem.com/Assets_Staging/Frontend/requestBooking"
    burgerMenu=".css-zvtom2"
    navBar="#side-nav_button_request-booking"
    RequestBookingURL="https://www.datascopesystem.com/Assets_Staging/Frontend/requestBooking"
    Asset="#asset-booking-request_dd_asset > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    PreferredDate=".dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    Duration="#asset-booking-request-form_dnb_duration"
    ContactName="#asset-booking-request-form_dffi_contact-name"
    contactNumber="#asset-booking-request-form_dffi_contact-number"
    email="#asset-booking-request-form_dffi_contact-email"
    notes="#asset-booking-request-form_dta_request-notes"
    companyName="#asset-booking-request-form_dd_company > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    submit="#asset-booking-request-form_db_submit"
    validateBooking="body > div.dx-overlay-wrapper.dx-popup-wrapper.dx-overlay-shader > div > div.dx-toolbar.dx-widget.dx-visibility-change-handler.dx-collection.dx-popup-title.dx-has-close-button > div > div.dx-toolbar-before > div > div > div"
    close="body > div.dx-overlay-wrapper.dx-popup-wrapper.dx-overlay-shader > div > div.dx-toolbar.dx-widget.dx-visibility-change-handler.dx-collection.dx-popup-title.dx-has-close-button > div > div.dx-toolbar-after > div > div > div > div"

    


      openUrl(){
        cy.visit(this.url)
        cy.get(this.burgerMenu).click()
        cy.get(this.navBar).click()
        //cy.url().should('eq', this.RequestBookingURL)
        }
        selectAsset() {
            cy.get(this.Asset) .type('LokiKM67CF')
            cy.contains('.dx-item-content','LokiKM67CF').click()
        }

        selectPreferredDate(){
        cy.get(this.PreferredDate).click();
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const day = tomorrow.getDate();
        cy.get('.dx-calendar').contains(new RegExp(`^${day}$`)).click({ force: true });
        cy.get('.dx-timeview-field').first().click({ force: true });
        cy.contains('OK').click({ force: true });       
        //     cy.get(this.PreferredDate).invoke('val', getTomorrowDateTime()).trigger('change')
         }
        enterDuration(){
            cy.get(this.Duration).click().type('25')
        }
        enterContactInformation(){
            cy.get(this.ContactName).click().type('Loki')
            cy.get(this.contactNumber).click().type('1234567890')
            cy.get(this.email).click().type('loki@gmail.com')
             cy.get(this.companyName).type('DATASCOPE')
            cy.contains('.dx-item-content','DATASCOPE').click()
        }
        enterNotes(){
            cy.get(this.notes).click().type('This is a test note')
        }
        clicksubmit(){
            cy.get(this.submit).click()
        }
        assetsvalidateBooking(){
        cy.get(this.validateBooking).should('be.visible').and('contain.text', 'BOOKING REQUEST/S SUBMITTED');

       } 
       clickclose(){
        cy.get(this.close).click()
       }
           
        }
        export default RequestBooking
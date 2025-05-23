class ManageBooking {
    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    burgerMenu=".css-zvtom2"
    navBar="#side-nav_button_manage-booking"
    ManageBookingURL="https://www.datascopesystem.com/Assets/Frontend/manageBookings"
    To="#manage-bookings-search-row_dp_to > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    Search="#manage-bookings_search-row_sb"
    Report=":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content"
    openUrl(){
        cy.visit(this.url)
        cy.get(this.burgerMenu).click()
        cy.get(this.navBar).click()
        }
        validateManageBooking(){
            cy.url().should('eq', this.ManageBookingURL)
        }
        chooseTo(){

            cy.get(this.To).invoke('val', '30/05/2025').trigger('change')
        }
        clickSearch(){
            cy.get(this.Search).click()
            cy.wait(2000)
        }
        generateReport(){
            cy.get(this.Report).click()
        }
       }
    

export default ManageBooking
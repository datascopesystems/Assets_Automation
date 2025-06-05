class ManageBooking {
    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    burgerMenu=".css-zvtom2"
    navBar="#side-nav_button_manage-booking"
    ManageBookingURL="https://www.datascopesystem.com/Assets/Frontend/manageBookings"
    To="#manage-bookings-search-row_dp_to > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    Search="#manage-bookings_search-row_sb"
    reviewRequest="#manage-bookings-bookings-table_dt_bookings > div > div.dx-datagrid-rowsview.dx-scrollable.dx-visibility-change-handler.dx-scrollable-both.dx-scrollable-simulated > div > div > div.dx-scrollable-content > div > table > tbody > tr.dx-row.dx-data-row > td.dx-command-edit.dx-command-edit-with-icons > a"
    acceptRequest="#manage-bookings-booking-table_ubrp_update > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogContent-root.MuiDialogContent-dividers.css-1o73klt > div > div:nth-child(1) > div > div > div:nth-child(1) > div.col-md-3 > button"
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

            cy.get(this.To).invoke('val', '25/06/2025').trigger('change')
        }
        clickSearch(){
            cy.get(this.Search).click()
            cy.wait(2000)
        }
       clickreviewRequest() {
        cy.get('.dx-scrollable-container').first().then(($container) => {
  const el = $container[0];
  el.scrollLeft = el.scrollWidth;
});

        

       // cy.get('.dx-scrollbar-horizontal').first() .scrollTo('left', { duration: 1000 });
  cy.get(this.reviewRequest)
    // .then(($el) => {
    //   if ($el.length > 0) {
    //     // Use native DOM scrollIntoView first
    //     $el[0].scrollIntoView({ behavior: 'auto', block: 'center' });
    //   }
    // })
    // .get(this.reviewRequest) // Re-get the element to reestablish Cypress chain
    .should('be.visible') // Now wait until it's visible
    .click(); // Then click it


            //cy.get(this.reviewRequest).scrollIntoview().click()
            cy.get(this.acceptRequest).click()
        }
        generateReport(){
            cy.get(this.Report).click()
        }
       
}

export default ManageBooking
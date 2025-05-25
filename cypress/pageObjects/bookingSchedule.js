class BookingSchedule{
    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    burgerMenu=".css-zvtom2"
    navBar="#side-nav_button_booking-schedule"
    BookingScheduleURL="https://www.datascopesystem.com/Assets_Staging/Frontend/bookingSchedule"
    addIcon=".MuiFab-sizeLarge"
    multiIcons="#SpeedDial-actions"
    AddBooking="[aria-label='Add Booking']"
    bookableAsset="#booking-details-form_dd_bookable-assets > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    bookingDate="#booking-details-form_dtp_block-start-datetime > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    company="#booking-details-form_dd_company"
    duration="#booking-details-form_dd_booking-duration > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    contactName="#booking-details-form_dffi_contact-name"
    contactNo="#booking-details-form_dffi_contact_number"
    email="#booking-details-form_dffi_contact-email"
    notes="#booking-details-form_dta_notes"
    submit="#add-new-booking-form_db_submit"







    openUrl(){
    cy.visit(this.url)
  }
  clickBurgerMenu(){
  cy.get(this.burgerMenu).click()
  }
  clickNavBar(){
  cy.get(this.navBar).click()
  }
  clickaddIcon(){
    cy.get(this.addIcon).click({force:true})
    cy.wait(5000)
  }
  getmultiIcons(){
    cy.get(this.multiIcons).click
  }
  clickAddBooking(){
    cy.get(this.AddBooking).click()
    cy.get(this.bookableAsset).type('LokiKM67CF')
    cy.contains('.dx-item-content','LokiKM67CF').click({force:true})
    cy.wait(2000)
     cy.get(this.bookingDate).click();
     cy.wait(1000) 
        cy.get('.dx-toolbar-before > .dx-item > .dx-item-content > .dx-widget > .dx-button-content').contains('Today').click({ force: true });
        cy.get('.dx-popup-done-visible .dx-button:contains("OK")').click();

    cy.wait(5000)
    cy.get(this.company).type('DATASCOPE')
    cy.get(':nth-child(64) > .dx-item-content').click()
    cy.get(this.duration).click({ force: true });
    cy.wait(5000) 
    cy.contains('div', '00:30').should('be.visible').click({ force: true });
    cy.wait(2000)
    cy.get(this.contactName).type('Sivan')
    cy.get(this.contactNo).type('07555555555')
    cy.get(this.email).type('loki@gmaill.com')
    cy.get(this.notes).type('automation notes for Loki QA automation')
    cy.get(this.submit).click()
  }
}


  export default BookingSchedule














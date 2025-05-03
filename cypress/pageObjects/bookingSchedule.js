class BookingSchedule{
    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
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
  enterUsername(username){
  cy.get(this.username).type(username)
  }
  enterPassword(password){
  cy.get(this.password).type(password)
  }
  clickLoginButton(){
  cy.get(this.loginButton).click()
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
  }
  selectbookableAsset(){
    cy.get(this.bookableAsset).type('Demo Asset')
    cy.get(':nth-child(30) > .dx-item-content').click()
    cy.wait(2000)
  }
  setbookingDate(){
    // function getCurrentDateTime() {
    //         const now = new Date();
            
    //         let day = now.getDate();
    //         let month = now.getMonth() + 1; // Months are zero-based
    //         const year = now.getFullYear();
            
    //         let hours = now.getHours();
    //         const minutes = now.getMinutes();
    //         const ampm = hours >= 24 ? 'PM' : 'AM';
            
    //         hours = hours % 24;
    //         hours = hours ? hours : 24; // the hour '0' should be '12'
            
    //         // Pad day, month, and minutes with leading zeros if needed
    //         day = day < 10 ? '0' + day : day;
    //         month = month < 10 ? '0' + month : month;
    //         const minutesStr = minutes < 10 ? '0' + minutes : minutes;
            
    //         const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutesStr} ${ampm} `;
    //         return formattedDateTime;
    //         }
            
    //         cy.log(getCurrentDateTime());
    cy.get(this.bookingDate).invoke('val', '02/05/2025 23:52').trigger('change')
    cy.wait(5000)
  }
  selectcompany(){
    cy.get(this.company).type('DATASCOPE')
    cy.get(':nth-child(64) > .dx-item-content').click()
  }
  enterduration(){
    cy.get(this.duration).click({ force: true });
    cy.wait(5000) 
    cy.contains('div', '00:30').should('be.visible').click({ force: true });
    cy.wait(2000)
    
  }
  entercontactName(){
    cy.get(this.contactName).type('Sivan')
  }
  entercontactNo(){
    cy.get(this.contactNo).type('07555555555')
  }
  enteremail(){
    cy.get(this.email).type('loki@gmaill.com')
  }
  enternotes(){
    cy.get(this.notes).type('automation notes for Loki QA automation')
  }
  clicksubmit(){
cy.get(this.submit).click()
  }
}


  export default BookingSchedule














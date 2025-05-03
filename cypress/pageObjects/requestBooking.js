class RequestBooking {

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    username="[name='Subject']"
    password="[name='Password']"
    loginButton="#loginButton"
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
    
        validateRequestBooking(){
            cy.url().should('eq', this.RequestBookingURL)
        }
        selectAsset() {
            cy.get(this.Asset) .type('lakh')
            cy.get(':nth-child(9) > .dx-item-content').click();
        }

        
        selectPreferredDate(){

            // function getCurrentDateTime() {
            //     const now = new Date();
                
            //     let day = now.getDate();
            //     let month = now.getMonth() + 1; // Months are zero-based
            //     const year = now.getFullYear();
                
            //     let hours = now.getHours();
            //     const minutes = now.getMinutes();
            //     const ampm = hours >= 12 ? 'PM' : 'AM';
                
            //     hours = hours % 12;
            //     hours = hours ? hours : 12; // the hour '0' should be '12'
                
            //     // Pad day, month, and minutes with leading zeros if needed
            //     day = day < 10 ? '0' + day : day;
            //     month = month < 10 ? '0' + month : month;
            //     const minutesStr = minutes < 10 ? '0' + minutes : minutes;
                
            //     const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutesStr} ${ampm}`;
            //     return formattedDateTime;
            //     }
                
            //     cy.log(getCurrentDateTime());

            function getTomorrowDateTime() {
                const now = new Date();
                
                // Create a new date object for tomorrow
                const tomorrow = new Date(now);
                tomorrow.setDate(now.getDate() + 1);
                
                let day = tomorrow.getDate();
                let month = tomorrow.getMonth() + 1; // Months are zero-based
                const year = tomorrow.getFullYear();
                
                let hours = now.getHours(); // Keep current hours
                const minutes = now.getMinutes(); // Keep current minutes
                const ampm = hours >= 12 ? 'PM' : 'AM';
                
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                
                // Pad day, month, and minutes with leading zeros if needed
                day = day < 10 ? '0' + day : day;
                month = month < 10 ? '0' + month : month;
                const minutesStr = minutes < 10 ? '0' + minutes : minutes;
                
                const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutesStr} ${ampm}`;
                return formattedDateTime;
                }
                
                console.log(getTomorrowDateTime());
            cy.get(this.PreferredDate).invoke('val', 'abcdefg').trigger('change')
        }
        enterDuration(){
            cy.get(this.Duration).click().type('25')
        }
        enterContactName(){
            cy.get(this.ContactName).click().type('Loki')
        }
        enterContactNumber(){
            cy.get(this.contactNumber).click().type('1234567890')
        }
        enterEmail(){
            cy.get(this.email).click().type('loki@gmail.com')
     }
        enterNotes(){
            cy.get(this.notes).click().type('This is a test note')
        }
        selectCompanyName() {
            cy.get(this.companyName).type('DATASCOPE')
            cy.get(':nth-child(64) > .dx-item-content').click()
               
        }
        
        }
    

export default RequestBooking
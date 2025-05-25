class SettingsManageEmail{

    url="https://www.datascopesystem.com/Assets_Staging/Frontend"
    settings="#root > div > div.MuiBox-root.css-i9gxme > header > div > div.MuiGrid-root.MuiGrid-container.css-f2pcil > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-10.MuiGrid-grid-lg-8.css-18yl3mt > div:nth-child(2) > span > button > span.MuiButton-icon.MuiButton-startIcon.MuiButton-iconSizeMedium.css-1l6c7y9"
    dropdown=":nth-child(1) > .css-tyn8o > :nth-child(3)" 
    manageEmail=":nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    addnotificationEmail=".dx-item-content > .dx-widget > .dx-button-content"
    notificationType="#root > div > div.MuiContainer-root.css-tcvbxc > div > div > div > div > div.dx-datagrid-rowsview.dx-last-row-border > div > table > tbody > tr.dx-row.dx-data-row.dx-row-lines.dx-column-lines.dx-row-inserted > td.dx-editor-cell.dx-datagrid-validator.dx-validator.dx-visibility-change-handler.dx-focused > div > div > div > div.dx-texteditor-input-container > input"
    dropdownType=":nth-child(4) > .dx-item-content"
    email="tr.dx-row-inserted"
    assetType="tr.dx-row-inserted"






openUrl(){
        cy.visit(this.url)
    }
    
    clicksettings(){
        cy.get(this.settings).click()
    }
    clickdropdown(){
        cy.get(this.dropdown).click()
    }
    clickmanageEmail(){
        cy.get(this.manageEmail).click()
    }
    clickaddnotificationEmail(){
        cy.get(this.addnotificationEmail).click()
    }
    clicknotificationType(){
         cy.get(this.notificationType).click()
    }
    clickdropdownType(){
         cy.get(this.dropdownType).click()
    }
    enteremail(){
     const uniqueEmail = `qa+${Math.random().toString(36).substring(2, 10)}@testautomation.com`;
       cy.get('tr.dx-row-inserted').find('td').eq(1).click().then(() => {
       cy.get(this.email).find('td').eq(1).find('input.dx-texteditor-input').should('have.length', 1).type(uniqueEmail);
    });
       //code for specific email
       //cy.get('tr.dx-row-inserted').find('td').eq(1).click() // Email column
       //.then(() => {
      // cy.get(this.email).find('td').eq(1).find('input.dx-texteditor-input') .should('have.length', 1).type('qa@datascopeplc.com'); // optional safety check
 
   // });
   }
    selectassetType(){
        cy.get('tr.dx-row-inserted').find('td').eq(2).click() // Assettype column

        .then(() => {
        cy.get(this.email).find('td').eq(2).find('input.dx-texteditor-input').type('Loki Asset')
        cy.get('.dx-overlay-content').contains('Loki Asset').click({ force: true });//code for select first option from multiple option 
        cy.get('body').click(0, 0); 
  });
    


  }
  }
export default SettingsManageEmail;





















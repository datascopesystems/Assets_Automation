class SiteTransfer {
  url = "https://www.datascopesystem.com/Assets_Staging/Frontend";
  manageAssetsURL = "https://www.datascopesystem.com/Assets_Staging/Frontend/manageAssets";
  AssetsGroup = "#manage-assets-table_rb_asset-group";
  AddAssetsGroup = ":nth-child(1) > .dx-item-content > .dx-widget > .dx-button-content";
  typeAssetgroup = ".dx-datagrid-validator > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input";
  selectsite = ".MuiSelect-select";
  chooseSite = "[data-value='1']";
  site1assetGroups = "#manage-assets-table_rb_asset-group > .MuiButtonBase-root > .PrivateSwitchBase-input";
  site1assets="#manage-assets-table_rb_assets > .MuiButtonBase-root > .PrivateSwitchBase-input"

  openUrl() {
    cy.visit(this.url);
    cy.url().should('eq', this.manageAssetsURL);
    cy.get(this.AssetsGroup).click();
  }

  clickAddAssetsGroup() {
    cy.get('tr[aria-rowindex="1"]').eq(0).find('td').eq(1).type('test transfer');
    cy.wait(1000);
    cy.get('tr').eq(2).find('span[class="dx-checkbox-icon"]').eq(0).click();
    cy.get('tr').eq(2).find('span[class="dx-checkbox-icon"]').eq(1).click();
    cy.get('body').click(0, 0);
    cy.wait(1000);
  }

checktransfer() {
  cy.get(this.selectsite).click();
  cy.get(this.chooseSite).click();
  cy.wait(2000);
  //cy.get(this.site1assetGroups).click();
  cy.get(this.site1assets).click()
}
//  searchAcrossPages(searchText, columnsToSearch = []) {
//     // Get the total number of pages from the pagination text.
//     // Increased timeout to ensure the pagination text is visible.
//     cy.contains(/Page \d+ of \d+/, { timeout: 10000 }).then(($el) => {
//       const text = $el.text();
//       const match = text.match(/Page \d+ of (\d+)/);

//       if (!match) {
//         throw new Error(`Could not extract total pages from: "${text}"`);
//       }

//       const totalPages = parseInt(match[1], 10);
//       cy.log(`Total pages detected: ${totalPages}`);

//       // Recursive function to check each page
//       const checkPage = (pageNumber) => {
//         // Base case: if we've checked all pages, stop.
//         if (pageNumber > totalPages) {
//           cy.log(`✅ Finished checking all ${totalPages} pages.`);
//           return;
//         }

//         cy.log(`🔎 Checking page ${pageNumber}`);

//         // Function to handle clicking the correct page number
//         const navigateToPage = () => {
//           // If it's the first page, we are already there, just ensure the pagination is visible and wait briefly.
//           if (pageNumber === 1) {
//             // For the first page, we just ensure the pagination is visible and wait briefly.
//             // Using .first() to explicitly scroll only one element.
//             return cy.get('.dx-page-indexes, .dx-pager', { timeout: 5000 }).first().scrollIntoView().wait(100);
//           }

//           // Attempt to find the pagination container and scroll it into view.
//           // Then, directly get the specific page number element within the scrolled view.
//           const pageNumberClickSelector = `.dx-page-indexes > div:contains("${pageNumber}")`;

//           return cy.get('.dx-page-indexes, .dx-pager', { timeout: 5000 }).first().scrollIntoView()
//             .then(() => { // Ensure scrollIntoView completes before trying to find the page number
//               return cy.get(pageNumberClickSelector, { timeout: 10000 }) // Get the specific page number element
//                 .should('not.have.class', 'dx-disabled') // Ensure it's not disabled
//                 .should('be.visible') // Ensure it's visible
//                 .click() // Click the page number
//                 .wait(500) // Small wait after click for page transition
//                cy.get(pageNumberClickSelector.should('have.class', 'dx-selection')) // Assert it has the active class
//                 .then(() => { // Log success after all assertions pass
//                   cy.log(`Page ${pageNumber} successfully navigated and asserted.`);
                
//                 });
//             });
//         };

//         // Perform navigation, then search the table.
//         navigateToPage().then(() => {
//           // Ensure the table content exists before searching.
//           // We will get all rows and then filter by columns.
//           return cy.get('table tbody tr', { timeout: 10000 }).should('exist').then(($rows) => {
//             let matches = [];
//             const lowerCaseSearchText = searchText.toLowerCase();

//             $rows.each((rowIndex, row) => {
//               // Get all cells within the current row
//               const $cells = Cypress.$(row).find('td');

//               // Determine which cells to search based on columnsToSearch
//               const cellsToExamine = columnsToSearch.length > 0
//                 ? columnsToSearch.map(colIndex => $cells.get(colIndex)).filter(Boolean) // Filter out undefined if index is out of bounds
//                 : $cells.get(); // If no specific columns, examine all cells

//               Cypress._.each(cellsToExamine, (td) => {
//                 const cellText = td.innerText.trim().toLowerCase();
//                 if (cellText.includes(lowerCaseSearchText)) {
//                   matches.push(td);
//                 }
//               });
//             });

//             // Highlight matches if found.
//             if (matches.length > 0) {
//               cy.log(`✅ Found ${matches.length} match(es) on page ${pageNumber}`);
//               matches.forEach((td) => {
//                 cy.wrap(td)
//                   .scrollIntoView()
//                   .invoke('css', 'background-color', 'yellow')
//                   .invoke('css', 'font-weight', 'bold');
//               });
//             } else {
//               cy.log(`❌ No match on page ${pageNumber}`);
//             }

//             // Recursively call checkPage for the next page.
//             checkPage(pageNumber + 1);
//           });
//         });
//       };

//       // Start the pagination search from the first page.
//       checkPage(1);
//     });
// }

 searchAcrossPages(searchText, columnsToSearch = []) {
    // Get the total number of pages from the pagination text.
    // Increased timeout to ensure the pagination text is visible.
    cy.contains(/Page \d+ of \d+/, { timeout: 10000 }).then(($el) => {
      const text = $el.text();
      const match = text.match(/Page \d+ of (\d+)/);

      if (!match) {
        throw new Error(`Could not extract total pages from: "${text}"`);
      }

      const totalPages = parseInt(match[1], 10);
      cy.log(`Total pages detected: ${totalPages}`);

      // Recursive function to check each page
      const checkPage = (pageNumber) => {
        // Base case: if we've checked all pages, stop.
        if (pageNumber > totalPages) {
          cy.log(`✅ Finished checking all ${totalPages} pages.`);
          return;
        }

        cy.log(`🔎 Checking page ${pageNumber}`);

        // Function to handle clicking the correct page number
        const navigateToPage = () => {
          // If it's the first page, we are already there, just ensure the pagination is visible and wait briefly.
          if (pageNumber === 1) {
            // For the first page, we just ensure the pagination is visible and wait briefly.
            // Using .first() to explicitly scroll only one element.
            return cy.get('.dx-page-indexes, .dx-pager', { timeout: 5000 }).first().scrollIntoView().wait(100);
          }

          // Attempt to find the pagination container and scroll it into view.
          // Then, directly get the specific page number element within the scrolled view.
          const pageNumberClickSelector = `.dx-page-indexes > div:contains("${pageNumber}")`;

          return cy.get('.dx-page-indexes, .dx-pager', { timeout: 5000 }).first().scrollIntoView()
            .then(() => { // Ensure scrollIntoView completes before trying to find the page number
              // First, assert the element is ready to be clicked (not disabled, visible)
              return cy.get(pageNumberClickSelector, { timeout: 10000 })
                .should('not.have.class', 'dx-disabled')
                .should('be.visible')
                .then(() => {
                  // Re-get the element immediately before clicking to ensure it's fresh and attached to the DOM.
                  // This is crucial for preventing "detached DOM element" errors.
                  cy.get(pageNumberClickSelector).click({ multiple: true });
                })
                .wait(500) // Small wait after click for page transition
                .then(() => {
                  // After clicking and waiting, re-get the element for the final assertion.
                  // This ensures the assertion is on the *newly* active element.
                  return cy.get(pageNumberClickSelector, { timeout: 10000 })
                    .should('have.class', 'dx-selection') // Assert it has the active class
                    .then(() => { // Log success after all assertions pass
                      cy.log(`Page ${pageNumber} successfully navigated and asserted.`);
                    });
                });
            });
        };

        // Perform navigation, then search the table.
        navigateToPage().then(() => {
          // Add a wait here to allow content to fully load after navigation
          cy.wait(2000); // Adjust this duration as needed for your application's loading times

          // Ensure the table content exists before searching.
          // We will get all rows and then filter by columns.
          return cy.get('table tbody tr', { timeout: 10000 }).should('exist').then(($rows) => {
            let matches = [];
            const lowerCaseSearchText = searchText.toLowerCase();

            $rows.each((rowIndex, row) => {
              // Get all cells within the current row
              const $cells = Cypress.$(row).find('td');

              // Determine which cells to search based on columnsToSearch
              const cellsToExamine = columnsToSearch.length > 0
                ? columnsToSearch.map(colIndex => $cells.get(colIndex)).filter(Boolean) // Filter out undefined if index is out of bounds
                : $cells.get(); // If no specific columns, examine all cells

              Cypress._.each(cellsToExamine, (td) => {
                const cellText = td.innerText.trim().toLowerCase();
                if (cellText.includes(lowerCaseSearchText)) {
                  matches.push(td);
                }
              });
            });

            // Highlight matches if found.
            if (matches.length > 0) {
              cy.log(`✅ Found ${matches.length} match(es) on page ${pageNumber}`);
              matches.forEach((td) => {
                cy.wrap(td)
                  .scrollIntoView()
                  .invoke('css', 'background-color', 'yellow')
                  .invoke('css', 'font-weight', 'bold');
              });
            } else {
              cy.log(`❌ No match on page ${pageNumber}`);
            }

            // Recursively call checkPage for the next page.
            checkPage(pageNumber + 1);
          });
        });
      };

      // Start the pagination search from the first page.
      checkPage(1);
    });
  }
}













//  searchAcrossPages(searchText) {
//     cy.contains(/Page \d+ of \d+/).then(($el) => {
//       const text = $el.text();
//       const match = text.match(/Page \d+ of (\d+)/);

//       if (!match) {
//         throw new Error(`Could not extract total pages from: "${text}"`);
//       }

//       const totalPages = parseInt(match[1], 10);

//       const checkPage = (pageNumber) => {
//         if (pageNumber > totalPages) {
//           cy.log(`Finished checking all ${totalPages} pages.`);
//           return;
//         }

//         cy.log(`Checking page ${pageNumber}`);

//         const clickPage = () => {
//           if (pageNumber > 1) {
//             return cy.get('.dx-info', { timeout: 5000 }).then($el => {
//               const pageNumbers = [...$el.find('a, button, span')]
//                 .map(el => el.innerText.trim())
//                 .filter(text => /^\d+$/.test(text))
//                 .map(Number);

//               if (pageNumbers.includes(pageNumber)) {
//                 return cy.wrap($el).contains(pageNumber.toString()).click().wait(500);
//               } else {
//                 cy.log(`Page ${pageNumber} not clickable, skipping.`);
//               }
//             });
//           }
//           return cy.wait(100); // small wait for first page
//         };

//         return clickPage().then(() => {
//           return cy.get('table td', { timeout: 5000 }).should('exist').then(($tds) => {
//             let matchFound = false;

//             $tds.each((i, td) => {
//               const cellText = td.innerText.trim().toLowerCase();
//               if (cellText.includes(searchText.toLowerCase())) {
//                 matchFound = true;
//                 cy.wrap(td)
//                   .scrollIntoView()
//                   .invoke('css', 'background-color', 'yellow')
//                   .invoke('css', 'font-weight', 'bold');
//               }
//             });

//             if (matchFound) {
//               cy.log(`Found "${searchText}" on page ${pageNumber}`);
//             } else {
//               cy.log(`No match on page ${pageNumber}`);
//             }

//             // Always go to the next page
//             checkPage(pageNumber + 1);
//           });
//         });
//       };

//       checkPage(1); // Start on first page
//     });
//   }




export default SiteTransfer;

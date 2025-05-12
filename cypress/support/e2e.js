// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath')
import 'cypress-mochawesome-reporter/register'
import 'cypress-file-upload';
//require('../utils/readExcel'); // Choose this if you want to use readExcel
// OR
require('xlsx'); // Choose this if you want to use xlsx

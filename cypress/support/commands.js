// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import AssetsRegistration from "../pageObjects/assetsRegistration";
const assets = new AssetsRegistration()
beforeEach(() => {
    cy.session('user-session', () => {
        // Perform login only once and cache the session
        cy.visit('https://www.datascopesystem.com/Assets_Staging/Frontend');
        cy.pause();
        cy.wait(1000);
    });
});

// Cypress.Commands.add("Login", function(){

//     assets.openwebsite()
//     assets.enterUsername("lokesh.s_dev")
//     assets.enterPassword("Assets123?")
//     assets.clickLoginButton()  
// })
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

Cypress.Commands.add(
  "signIn",
  (
    email = Cypress.env("signIn").email,
    password = Cypress.env("signIn").password
  ) => {
    const cssInputEmail = "#UserName";
    const cssInputPassword = "#password";
    const cssButtonLogin = "#ys-fastlogin-button";
    cy.get(cssInputEmail).as("emailInput");
    cy.get(cssInputPassword).as("passwordInput");
    cy.get(cssButtonLogin).as("submitButton");
    cy.get("@emailInput").type(email);
    cy.get("@passwordInput").type(password);
    cy.get("@submitButton").click();
  }
);

Cypress.on("uncaught:exception", () => {
  // when the exception originated from an unhandled promise
  // rejection, the promise is provided as a third argument
  // you can turn off failing the test in this case

  return false;

  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
});

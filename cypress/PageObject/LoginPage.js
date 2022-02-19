class LoginPage {
  clear() {
    const cssInputEmail = "#UserName";
    const cssInputPassword = "#password";
    cy.get(cssInputEmail).clear();
    return cy.get(cssInputPassword).clear();
  }
  enterEmail(email = Cypress.env("signIn").email) {
    const cssInputEmail = "#UserName";
    return cy.get(cssInputEmail).clear().type(email);
  }
  enterPassword(password = Cypress.env("signIn").password) {
    const cssInputPassword = "#password";
    return cy.get(cssInputPassword).clear().type(password);
  }

  submit() {
    const cssButtonLogin = "#ys-fastlogin-button";
    return cy.get(cssButtonLogin).click();
  }
  
}
export default LoginPage;

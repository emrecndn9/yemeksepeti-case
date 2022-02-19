import LoginPage from "./PageObject/LoginPage";
context("Login Tests", () => {
  const login = new LoginPage();
  before(() => {
    cy.visit("/");
    cy.url().should("eq", "https://www.yemeksepeti.com/");
    cy.contains("span", "55").click();
    cy.url().should("eq", "https://www.yemeksepeti.com/samsun");
  });

  it("User try to login without both email and password ", () => {
    login.submit();
    cy.get(".help-block").eq(0).invoke('text').should(
      "eq",
      "Lütfen kullanıcı adınızı/e-postanızı giriniz."
    );
    cy.get(".help-block").eq(1).invoke('text').should(
      "eq",
      "Lütfen şifrenizi giriniz."
    );
  });
 
  it("User try to login without email ", () => {
    login.clear()
    login.enterPassword();
    login.submit();
    cy.get(".help-block").invoke('text').should(
      "eq",
      "Lütfen kullanıcı adınızı/e-postanızı giriniz."
    );
  });
  it("User try to login without password ", () => {
    login.clear()
    login.enterEmail();
    login.submit();
    cy.get(".help-block").invoke('text').should("eq", "Lütfen şifrenizi giriniz.");
  });

  it("User try to login with invalid credentials", () => {
    login.enterEmail("invalidmail@gmail.com");
    login.enterPassword("pass123456");
    login.submit();
    cy.get("#ui-id-1").should("be.visible");
    cy.get(".confirmButton").click();
  });

  it("User try to login with valid credentials", () => {
    login.enterEmail();
    login.enterPassword();
    login.submit();
  });
});

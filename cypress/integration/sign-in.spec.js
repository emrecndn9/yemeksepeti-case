context("Login Tests", () => {
  before(() => {
    cy.visit("/");
  });
  it("User try to login with valid credentials", () => {
    cy.contains("span", "55").click();
    cy.signIn();

  });

  it("Search restaurants ", () => {
    cy.get("#select2-ys-areaSelector-container").click();
    cy.get(".select2-results__option").first().click();
    cy.get(".search-button").click();
  });
});

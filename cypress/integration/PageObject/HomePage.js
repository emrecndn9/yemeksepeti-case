class HomePage {
  goHome() {
      
    const cssLogo = ".logo2";
    cy.wait(2000)
    return cy.get(cssLogo).click();
  }
  searchRestaurants() {
    const cssCollapseArea = "#select2-ys-areaSelector-container";
    const cssAllResult = ".select2-results__option";
    const cssSearchButton = ".search-button";
    cy.wait(2000);
    cy.get(cssCollapseArea).click();
    cy.get(cssAllResult).first().click();
    return cy.get(cssSearchButton).click();
  }
}
export default HomePage;

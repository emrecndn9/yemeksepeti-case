import HomePage from "./PageObject/HomePage";
import RestaurantsPage from "./PageObject/RestaurantsPage";
context("Add favourites Tests", () => {
  const home = new HomePage();
  const restaurant = new RestaurantsPage();
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("eq", "https://www.yemeksepeti.com/");
    cy.contains("span", "55").click();
    cy.url().should("eq", "https://www.yemeksepeti.com/samsun");
  });
  beforeEach(() => {
    // home.goHome();
    cy.login();
  });
  it("Search restaurants and add  a restaurants to favourites ", () => {
    home.searchRestaurants();
    restaurant.addFavRestaurant();
  });

  it("Remove fav from favourites tab on home page ", () => {
    restaurant.goFavrouritesTab();
    restaurant.goToRestaurantFaved();
    restaurant.unFavRestaurant();
  });

  it("Search restaurants and add  a restaurants to favourites ", () => {
    home.searchRestaurants();
    restaurant.addFavRestaurant();
  });

  it("Remove fav from favourites page ", () => {
    restaurant.deleteFavRestaurant();
  });
});

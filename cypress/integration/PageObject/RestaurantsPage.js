import HomePage from "./HomePage";
class RestaurantsPage {
  goToRestaurant() {
    const cssRestaurantName = ".restaurantName";
    return cy.get(cssRestaurantName).first().click();
  }
  goToRestaurantFaved() {
    const cssRestaurantName = ".mainpage-tabs-fav-restaurant";
    return cy.get(cssRestaurantName).first().click();
  }
  goFavrouritesTab() {
    const home = new HomePage();
    home.goHome();
    const cssMyFavourites = ".ys-icons-star";
    return cy.get(cssMyFavourites).click();
  }

  addFavRestaurant() {
    const cssRestaurantName = ".restaurantName";
    const cssAddFavButton = ".ys-icons-grayStar";
    const cssFavouriteRestaurant = ".mainpage-tabs-fav-restaurant";

    return cy
      .get(cssRestaurantName)
      .first()
      .invoke("text")
      .then((text) => {
        text = text.replace(/^\s+|\s+$|\n/g, "");
        this.goToRestaurant();
        cy.get(cssAddFavButton).click();
        this.goFavrouritesTab();
        cy.get(cssFavouriteRestaurant).invoke("text").should("contain", text);
        cy.get(cssFavouriteRestaurant).click();
      });
  }
  unFavRestaurant() {
    const restaurantsNotFoundOntab = "Favori restoranınız bulunamadı.";
    const cssRemoveFavButton = ".ys-icons-yellowStar";
    cy.get(cssRemoveFavButton).click();
    this.goFavrouritesTab();
    this.assertionNoFavs(restaurantsNotFoundOntab);
  }
  deleteFavRestaurant() {
    const cssCollapseButton = ".withPoint";
    const cssMyFavourites = 'a[href*="/hesabim/favorilerim"]';
    const cssSelectBox = 'input[name="SelectedFavoriteRestaurantIds"]';
    const cssDeleteFavourites = ".delete-favourites";
    const cssFavsUrl = "/hesabim/favorilerim";
    const restaurantsNotFoundOnFavPage =
      "Henüz favori restoranınız bulunmamaktadır.";
    this.goFavrouritesTab();
    cy.get(cssCollapseButton).click();
    cy.get(cssMyFavourites).click();
    cy.url().should("contain", cssFavsUrl);
    cy.get(cssSelectBox).click();
    cy.get(cssDeleteFavourites).click();
    this.assertionNoFavs(restaurantsNotFoundOnFavPage);
  }
  assertionNoFavs(assertMessage) {
    const cssFavsList = "#favorites";
    cy.wait(1000)
    cy.get(cssFavsList).invoke('text').then((text)=>{
        text = text.replace(/^\s+|\s+$|\n/g, "");
        expect(assertMessage).to.equal(text)
    })
  }
}
export default RestaurantsPage;

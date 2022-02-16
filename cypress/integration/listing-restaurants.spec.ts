import { API_KEY } from "../../app/constants";

describe("Listing Restaurants", () => {
  it("should show restaurants from the server", () => {
    const sushiPlace = "Sushi Place";
    const pizzaPlace = "Pizza Place";

    cy.intercept(
      "GET",
      `https://outside-in-dev-api.herokuapp.com/${API_KEY}/restaurants`,
      [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ]
    );

    cy.visit("/");
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});

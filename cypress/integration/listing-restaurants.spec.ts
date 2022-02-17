import { API_KEY } from "../../app/constants";

describe("Listing Restaurants", () => {
  it("should show restaurants from the server", () => {
    const pastaPlace = "Pasta Place";
    const saladPlace = "Salad Place";

    cy.intercept(
      "GET",
      `https://outside-in-dev-api.herokuapp.com/${API_KEY}/restaurants`,
      [
        { id: 1, name: pastaPlace },
        { id: 2, name: saladPlace },
      ]
    );

    cy.visit("/");
    cy.contains(pastaPlace);
    cy.contains(saladPlace);
  });
});

describe("Listing Restaurants", () => {
  it("should show restaurants from the server", () => {
    // mocking at ~/mocks/handlers
    // const restaurants: Restaurant[] = [
    //   { id: 1, name: "Sushi Place" },
    //   { id: 2, name: "Pizza Place" },
    // ];

    cy.visit("/");
    cy.contains("Sushi Place");
    cy.contains("Pizza Place");
  });
});

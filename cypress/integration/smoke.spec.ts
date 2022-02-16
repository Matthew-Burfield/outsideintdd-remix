describe("Smoke test", () => {
  it("should view the home page", () => {
    cy.visit("/");
    cy.contains("Welcome to Remix");
  });
});

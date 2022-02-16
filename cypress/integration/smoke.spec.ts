describe("Smoke test", () => {
  it("should view the home page", () => {
    cy.visit("/");
    cy.findByRole("heading", { name: /welcome to remix/i }).should("exist");
  });
});

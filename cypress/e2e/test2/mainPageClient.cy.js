const selector = require("../../fixtures/selector.json");

describe("Should show correct display of the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should show correct title", () => {
    cy.get(selector.title).should("have.text", "Идёмвкино");
  });

  it("Should show correct weekday", () => {
    cy.get(selector.daysWeek).should("have.length", 7);
  });

  it("Should show correct number of films", () => {
    cy.get(selector.chooseFilm).should("have.length", 2);
  });
});

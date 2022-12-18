const login = require("../../fixtures/login.json");
const selector = require("../../fixtures/selector.json");

describe("Admin login", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it("Should login with correct email and password", () => {
    cy.login(login.correctEmail, login.correctPassword);
    cy.contains(selector.deskForEqual).should("be.visible");
  });

  it("Should login with incorrect email and password", () => {
    cy.login(login.incorrectEmail, login.incorrectPassword);
    cy.contains(selector.authorisationError).should("be.visible");
  });

  it("Should incorrect email", () => {
    cy.login(login.incorrectEmail, login.correctPassword);
    cy.contains(selector.authorisationError).should("be.visible");
  });

  it("Should incorrect password", () => {
    cy.login(login.correctEmail, login.incorrectPassword);
    cy.contains(selector.authorisationError).should("be.visible");
  });
});

const selector = require("../fixtures/selector.json");
const login = require("../fixtures/login.json");

it("Should find a hall that sells tickets", () => {
  cy.visit("/admin");
  cy.login(login.correctEmail, login.correctPassword);
  cy.contains(selector.deskForEqual).should("be.visible");
  cy.get(selector.hallOpening).contains(selector.nameHall);
  cy.visit("/");
  cy.get(selector.chooseTimeSession).click();
  cy.get(selector.chooseFilm).contains(selector.timeSession).click();
  cy.contains(selector.timeSessionForEqual).should("be.visible");
  cy.get(selector.chooseChair).click();
  cy.get(selector.pushButton).click();
  cy.url().should("include", "/client/payment.php");
  cy.get(selector.pushButton).click();
  cy.contains(selector.takeTicket).should("be.visible");
});

///<reference types="Cypress"/>
describe("MyFirstSuite", function () {
  //Test Suite

  // ----------------------------------------------------------------
  // ACUMEN CI - HOMEPAGE

  it("Home", function () {
    // Visits Acumen CI website:
    cy.visit("https://www.acumenci.com/");

    // On landing, validates Title:
    cy.title().should(
      "include",
      "Revenue Management Consultancy | Acumen Commercial Insights"
    );

    // Validate visibility of Chat Bot
    cy.wait(4000);
    cy.get("._49_rs").should("be.visible");

    // Search
    cy.get("#input_search-box-input-comp-kwdft0y2").type("What we do");
    cy.wait(1000);
    cy.get(
      "div[title='What we do | Acumen Commercial Insights']>div>span"
    ).click();
  });

  // ----------------------------------------------------------------
  // ACUMEN CI - WHAT WE DO

  it("What we do", function () {
    // Visits Acumen CI website:
    // cy.visit("https://www.acumenci.com/");

    // On landing, validates Title:
    cy.title().should("include", "What we do | Acumen Commercial Insights");

    // Validate visibility of Chat Bot
    cy.wait(4000);
    cy.get("._49_rs").should("be.visible");

    // Search
    cy.get("#input_search-box-input-comp-kwdft0y2").type(
      "Revenue management insights"
    );
    cy.wait(1000);
    cy.get(
      "div[title='Revenue Management Insights | Acumen Commercial Insights']>div>span"
    ).click();
  });

  // ----------------------------------------------------------------
  // ACUMEN CI - REVENUE MANAGEMENT INSIGHTS

  it("What we do", function () {
    // Visits Acumen CI website:
    // cy.visit("https://www.acumenci.com/");

    // On landing, validates Title:
    cy.title().should("include", "What we do | Acumen Commercial Insights");

    // Validate visibility of Chat Bot
    cy.wait(4000);
    cy.get("._49_rs").should("be.visible");

    // Search
    cy.get("#input_search-box-input-comp-kwdft0y2").type(
      "Revenue management insights"
    );
    cy.wait(1000);
    cy.get(
      "div[title='Revenue Management Insights | Acumen Commercial Insights']>div>span"
    ).click();
  });
});

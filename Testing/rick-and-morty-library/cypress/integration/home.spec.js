// First adding Cypress as a reference type, which allows Cypress to find the file and know that it should use it to run a test
/// <reference types="cypress" />

// Creating a new context for our test and defining it as Home
context('Home', () => {
    // Telling Cypress that before each test, we want it to visit our homepage
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    // Defining a test that grabs the h1 and checks that it contains the title of the application/page
    it('Should navigate to the homepage at localhost and find the title of the page', () => {
        cy.get('h1').contains('Rick & Morty Library');
    });

    it('Should have a logo from the aplication', () => {
        cy.get('img').should('have.attr', 'src').should('include', 'logo');
    });

    it("should verify the homepage looks as expected", () => {
      // First, we’re “opening the eyes” of Applitools, which will prepare the Eyes functionality to check our app
      cy.eyesOpen({
        appName: "Rick and Morty Library",
        testName: "Homepage Check",
      });

      // Next, we’re running a check on the window of our application, essentially capturing a screenshot of our app and sending it to Applitools
      cy.eyesCheckWindow({
        tag: "App Window",
        target: "window",
        fully: true,
      });

      // Finally, we “close the eyes” of Applitools, letting Eyes know that we’re running our checks
      cy.eyesClose();
    });
});

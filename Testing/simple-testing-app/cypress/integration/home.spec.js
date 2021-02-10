/// <reference types="cypress" />

context('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('Should navigate to the homepage at localhost and find the title of the page', () => {
        cy.get('h1').contains('Welcome');
    });

    it('should veriry the homepage looks as expected', () => {
        cy.eyesOpen({
            appName: 'My App',
            testName: 'Homepage Check'
        });

        cy.eyesCheckWindow({
            tag: 'App Window',
            target: 'window',
            fully: true
        });

        cy.eyesClose();
    });
});
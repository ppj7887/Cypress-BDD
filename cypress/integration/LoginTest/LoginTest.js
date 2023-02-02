import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('Open the login page2',()=>{
    cy.visit('https://practice.automationtesting.in/my-account/')
})
When('Enter the {string} and {string}', (Username, Password)=>{
    cy.get('#username').type(Username)
    cy.get('#password').type(Password)
})
Then('Click on login buttons', ()=>{
    cy.get('[name="login"]').click()
})
And('Validate the Dashboard details', ()=>{
    cy.get('.woocommerce-MyAccount-navigation-link--downloads > a').should('have.text', 'Downloads')
})

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('Visit the practice automation site', ()=>{
    cy.visit('https://practice.automationtesting.in/my-account/')
})

When('Type the {string} and {string}', (username, password)=>{
    cy.get('#username').type(username)
    cy.get('#password').type(password)
})

And('I Click on login button',()=>{
    cy.get('[name="login"]').click()
})

Then('Validate the Dashboard for Login',()=>{
    cy.get('.woocommerce-MyAccount-content > p').should('contain', "Hello")
})

import {Given, Then, When, And} from "cypress-cucumber-preprocessor/steps";

Given('Open the login page', ()=>{
    // cy.log('given')
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})
When('Update the username', ()=>{
    // cy.log('when')
    cy.get('#username').type('student')
})

And('Update the Password',()=>{
    // cy.log('and')
    cy.get('#password').type('Password123')
})

Then('Click on login button', ()=>{
    // cy.log('then')
    cy.get('#submit').click()
})

And('Validate the Dashboard',()=>{
    cy.log('and')
    cy.get('.post-title').should('be.visible')
})
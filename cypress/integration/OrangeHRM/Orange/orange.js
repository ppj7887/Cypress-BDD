
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('Open the orange login page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
When('Update the orange username', ()=>{
    cy.get('[name="username"]').type('Admin')
})
And('Update the orange Password', ()=>{
    cy.get('[type="password"]').type('admin123')
})
Then('Click on orange login button', ()=>{
    cy.get('[type="submit"]').click()
})
And('Validate orange the Dashboard',()=>{
    cy.get('img[alt="client brand banner"]').should('be.visible')
})
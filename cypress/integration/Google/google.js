import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

Given('I want to open Amazon page', () => {
    cy.visit('https://www.amazon.in/?tag=enin-edge-ntp-topsites-affiliates-21')
  })

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
  })
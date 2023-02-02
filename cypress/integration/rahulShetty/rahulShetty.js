import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('Visit the ecommerce site for vegitables', ()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When('Type {string} in search and get {string}', (str, str1)=>{
    cy.get('.search-keyword').type(str)
    cy.get('[type="submit"]').click()
    cy.get('.product-name').each((el, index)=>{
        if(el.text().includes(str1)){
            cy.get('.product-action > button').eq(index).click()
        }
    })
})

And('Proceed to checkout',()=>{
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
})

Then('select country and click on Proceed', ()=>{
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('.chkAgree').check()
    cy.contains('Proceed').click()
})

And('verify {string} message', (msg)=>{
    cy.contains('Thank you').should('contain', msg)
})

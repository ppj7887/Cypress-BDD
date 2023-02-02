
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('Send GET request', ()=>{
    cy.request({
        method: "GET",
        url: 'https://reqres.in/api/users?page=2'
    }).as('getUser')
})

Then('Userlist should be displayed', ()=>{
    cy.get('@getUser').then((res)=>{
        cy.log(res)
        expect(res.status).to.eql(200)
        expect(res.statusText).to.eql('OK')
        expect(res.body.page).to.eq(2)
    })
})

Given('User sent POST request to create multiple user with {string} and {string}', (name, job)=>{
    cy.request({
        method: "POST",
        url:'https://reqres.in/api/users',
        body:{
            "name": name,
            "job": job
        }
    }).as('createUser')
})

Then('Users should be created with {string} and {string}', (name,job)=>{
    cy.get('@createUser').then((res)=>{
        cy.log(res)
        expect(res.body.name).to.eq(name)
    })
})



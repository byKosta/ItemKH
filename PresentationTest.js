// Itemit Testing Cypress

it.only('login,password', function() {

    cy.visit('https://web.itemit.com/#/items')
    cy.get('[name="email"]').type('khtest@yopmail.com')
    cy.get('.sc-bvCTgw > .sc-jGkVzM') .type('password {Enter}')
    cy.get('[href="#/collections"]'). click()
    cy.wait(3000)
    cy.get('.sc-fEUNkw').click()
    cy.wait(3000)
    cy.get('.sc-feryYK > :nth-child(9)').click()
    cy.wait(3000)
    cy.get('[href="#/collections"]').click()
    cy.get('[href="#/locations"]').click()
    cy.get('[href="#/reminders"]').click()
    cy.get('[href="#/bookings"]').click()
    cy.get('[href="#/issues"]').click()
    cy.get('[href="#/devices"]').click()
    cy.get('[href="#/reports"]').click()
    cy.get('[href="#/users"]') .click()
    cy.get('.icon-gear').click()
    cy.wait(3000)
    cy.get('[href="#/items"]').click()
    cy.wait(3000)
    cy.get('.sc-RbTVP > .sc-bYwvMP').click()





     
 })
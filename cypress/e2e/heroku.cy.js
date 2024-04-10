describe('template spec', () => {
  it('test de login valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('.radius').log('You logged into a secure area!')
  })

  it('test de login invalido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmit")
    cy.get('#password').type("SuperSecretPassword!")
    
})
it('test de login valido', () => {
  cy.visit('https://the-internet.herokuapp.com/')
  cy.get(':nth-child(21) > a').click()
  cy.get('#username').type("tomsmith")
  cy.get('#password').type("SuperSecretPassword")

})
})
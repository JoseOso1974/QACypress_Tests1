describe("Pruebas en automationexercise", () => {
    it('Registrar usuario', () => {
cy.visit('https://automationexercise.com/')
cy.get('section[style="height: auto !important;"] > .container > .row')
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
cy.get('[data-qa="signup-name"]').type('Oso')
cy.get('[data-qa="signup-email"]').type('oemy19@kmail.com')
cy.get('[data-qa="signup-button"]').click()
cy.get('#id_gender1').click()
cy.get('[data-qa="password"]').type('Mimu2377')
cy.get('[data-qa="days"]').select('3')
cy.get('[data-qa="months"]').select('April')
cy.get('[data-qa="years"]').select('1974')
cy.get('[data-qa="first_name"]').type('Jose Oso')
cy.get('[data-qa="last_name"]').type('Muñoz')
cy.get('[data-qa="company"]').type('OsoLogistics')
cy.get('[data-qa="address"]').type('Ramón Llull, 42')
cy.get('[data-qa="country"]').select('United States')
cy.get('[data-qa="state"]').type('New York')
cy.get('[data-qa="city"]').type('Manhattan')
cy.get('[data-qa="zipcode"]').type('08780')
cy.get('[data-qa="mobile_number"]').type('627986532')
cy.get('[data-qa="create-account"]').click()
cy.get('[data-qa="continue-button"]').click()

    })
})
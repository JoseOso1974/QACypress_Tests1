describe("Pruebas en automationexercise", () => {
    it('Registrar usuario', () => {
cy.visit('https://automationexercise.com/')
cy.get('section[style="height: auto !important;"] > .container > .row')
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    })
})
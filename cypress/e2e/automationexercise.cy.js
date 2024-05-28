describe("Pruebas en automationexercise", () => {
    it('Registrar usuario', () => {
cy.visit('https://automationexercise.com/')
cy.get('section[style="height: auto !important;"] > .container > .row')
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
cy.get('[data-qa="signup-name"]').type('Oso')
cy.get('[data-qa="signup-email"]').type('oemy19@xmail.com')
cy.get('[data-qa="signup-button"]').click()
cy.get('[data-qa="password"]').type('Mimu2377')
cy.get('[data-qa="days"]').select('3')
cy.get('[data-qa="months"]').select('April')
cy.get('[data-qa="years"]').select('1974')
cy.get('#id_gender1').click()
cy.get('[data-qa="first_name"]').type('Jose Oso')
cy.get('[data-qa="last_name"]').type('Muñoz')
cy.get('[data-qa="company"]').type('OsoLogistics')
cy.get('[data-qa="address"]').type('Ramón Llull')
cy.get('[data-qa="country"]').select('United States')
cy.get('[data-qa="state"]').type('New York')
cy.get('[data-qa="city"]').type('Manhattan')
cy.get('[data-qa="zipcode"]').type('08780')
cy.get('[data-qa="mobile_number"]').type('627986532')
cy.get('[data-qa="create-account"]').click()
cy.get('[data-qa="continue-button"]').click()
cy.get(':nth-child(10) > a').should('be.visible')
cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
cy.get('b').should('be.visible')
cy.get('[data-qa="continue-button"]').click()

 })

 it('Login usuario', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('be.visible')
    cy.get('[data-qa="login-email"]').type('oemy19@hotmail.com')
    cy.get('[data-qa="login-password"]').type('Mimu2377')
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('b').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()

 })

 it('Login Ususario incorrecto', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('be.visible')
    cy.get('[data-qa="login-email"]').type('cacharro@hotmail.com')
    cy.get('[data-qa="login-password"]').type('258789')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.login-form > form > p').should('be.visible')

 })

 it('Cerrar sesion usuario', () => {
   cy.visit('https://automationexercise.com/')
   cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
   cy.get('.login-form > h2').should('be.visible')
   cy.get('[data-qa="login-email"]').type('oemy19@gmail.com')
   cy.get('[data-qa="login-password"]').type('Mimu2377')
   cy.get('[data-qa="login-button"]').click()
   cy.get(':nth-child(10) > a').contains('Oso')
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
   cy.get('.nav > :nth-child(1) > a').click()

 })

 it('Registrar usuario con email existente', () => {
   cy.visit('https://automationexercise.com/')
   cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
   cy.get('.signup-form > h2').should('be.visible')
   cy.get('[data-qa="signup-name"]').type('Oso')
   cy.get('[data-qa="signup-email"]').type('oemy19@gmail.com')
   cy.get('[data-qa="signup-button"]').click()
   cy.get('.signup-form > form > p').contains('Email Address already exist!')

 })

 it('Formulario de contacto', () => {
   cy.visit('https://automationexercise.com/')
   cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
   cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
   cy.get('div.contact-form > .title').should('be.visible')
   cy.get('[data-qa="name"]').type('Oso')
   cy.get('[data-qa="email"]').type('oemy19@gmail.com')
   cy.get('[data-qa="subject"]').type('Bolso')
   cy.get('[data-qa="message"]').type('Podrían confirmar stock de este modelo?')
   cy.get(':nth-child(6) > .form-control').click()
   cy.get('[data-qa="submit-button"]').click()
   cy.get('.status').contains('Success! Your details have been submitted successfully.')
   cy.get('span').click()
   cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')

 })

 it('Verificar página casos de prueba', () => {
   cy.visit('https://automationexercise.com/')
   cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
   cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click()
   cy.get('body').should('be.visible')

 })

 it('Verificar todos los productos y página de detalles del producto', () => {
   cy.visit('https://automationexercise.com/')
   cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
   cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
   cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
   cy.get('.features_items').should('be.visible')
   cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
   cy.get('.col-sm-9').should('be.visible')
   cy.get('.product-information > h2').should('be.visible')
   cy.get('.product-information > :nth-child(3)').should('be.visible')
   cy.get(':nth-child(5) > span').should('be.visible')
   cy.get('.product-information > :nth-child(6)').should('be.visible')
   cy.get('.product-information > :nth-child(7)').should('be.visible')
   cy.get('.product-information > :nth-child(7)').should('be.visible')

 })

 it('Producto de búqueda', () => {
  cy.visit('https://automationexercise.com/')
  cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
  cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
  cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
  cy.get('#search_product').type('Blue Top')
  cy.get('#submit_search > .fa').click()
  cy.get('.title').should('be.visible')
  cy.get('.productinfo > p').contains('Blue Top')

})

it('Verificar la suscripción en la página de inicio', () => {
  cy.visit('https://automationexercise.com/')
  cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
  cy.get('.single-widget > h2').should('be.visible')
  cy.get('#susbscribe_email').type('oemy19@gmail.com')
  cy.get('#subscribe > .fa').click()
  cy.get('.alert-success').should('be.visible')

})

it('Verificar la suscripción pagina carrito', () => {
  cy.visit('https://automationexercise.com/')
  cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
  cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
  cy.scrollTo('bottom')
  cy.get('h2').should('be.visible')
  cy.get('#susbscribe_email').type('oemy19@gmail.com')
  cy.get('#subscribe > .fa').click()
  cy.get('.alert-success').should('be.visible')

})

it.only('Agregar productos al carrito', () => {
  cy.visit('https://automationexercise.com/')
  cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
  cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
  cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('.modal-footer > .btn').click()
  cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('.modal-footer > .btn').click()
  cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
  cy.get('#product-1').should('be.visible')
  cy.get('#product-2').should('be.visible')
  cy.get('#product-1 > .cart_price > p').should('be.visible')
  cy.get('#product-2 > .cart_price > p').should('be.visible')
  cy.get('#product-1 > .cart_total > .cart_total_price').should('be.visible')
  cy.get('#product-2 > .cart_total > .cart_total_price').should('be.visible')
  cy.get('#product-1 > .cart_quantity > .disabled').should('be.visible')
  cy.get('#product-2 > .cart_quantity > .disabled').should('be.visible')


})

})


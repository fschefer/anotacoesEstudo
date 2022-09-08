it('Aplicação deve estar online', function(){
    cy.visit('/')
    cy.title().should('eq', 'Samurai Barbershop by QAninja')
})

/*É possível colocar o viewport no cypress.json
"viewportWidth": 1000,
"viewportHeight": 660*/

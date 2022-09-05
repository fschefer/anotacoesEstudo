it('Dropdown menu', function () {
    cy.viewport(1920, 1080)
    cy.visit('/select')
    cy.get('#avengerList')
        .select('Tony Stark')
        .should('have.value', '3')
})
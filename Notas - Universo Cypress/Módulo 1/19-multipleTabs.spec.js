it('Working with multiple tables', function () {
    cy.viewport(1920, 1080)
    cy.visit('/new_tab')
    cy.get('a[href="https://www.google.com.br"]')
        .should('have.attr', 'target', '_blank')

})
it('Timeout', function () {
    cy.viewport(1920, 1080)
    cy.visit('/timeout')
    cy.contains('button', 'Habilita').click()
    cy.get('#firstname')
        .should('be.visible')
        .type('Flávio', {timeout: 7000})
})
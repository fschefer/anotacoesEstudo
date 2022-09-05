it('Marcando radio buttons', function(){
    cy.viewport(1920, 1080)
    cy.visit('/radios')
    cy.get('input[value=strange]').click().should('be.checked')
})
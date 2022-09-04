it('Marcando radio buttons', function(){
    cy.viewport(1920, 1080)
    cy.visit('https://training-wheels-qaninja.herokuapp.com/radios')
    cy.get('input[value=strange]').click().should('be.checked')
})
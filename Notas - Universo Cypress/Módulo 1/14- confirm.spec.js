it('Confirmação positiva em JavaScript', function () {
    cy.viewport(1920, 1080)
    cy.visit('/javascript_alerts')
    cy.contains('button', 'Confirma').click()
    cy.on('window:confirm', () => true)
    cy.get('#result').should('have.text', 'Mensagem confirmada')
})

it('Confirmação negativa', function(){
    cy.viewport(1920, 1080)
    cy.visit('/javascript_alerts')
    cy.contains('button', 'Confirma').click()
    cy.on('window:confirm', () => false)
    cy.get('#result').should('have.text', 'Mensagem não confirmada')
})  
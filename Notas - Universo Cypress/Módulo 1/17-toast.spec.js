it('Notificações flutuantes', function(){
    cy.viewport(1920, 1080)
    cy.visit('/toaster')
    cy.contains('button', 'Toast Rápido').click()
    cy.get('.notification')
    .should('be.visible')
    .should('have.text', 'Essa notificação é muito rápida!')
})
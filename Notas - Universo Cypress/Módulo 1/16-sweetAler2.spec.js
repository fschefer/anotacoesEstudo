it('Sweet Alert 2 verde', function(){
    cy.viewport(1920, 1080)
    cy.visit('/sweet_alert')
    cy.contains('button', 'Sucesso').click()
    cy.get('.swal-text').should('have.text', 'Você clicou no botão verde.')
})

it('Sweet Alert 2 vermelho', function(){
    cy.viewport(1920, 1080)
    cy.visit('/sweet_alert')
    cy.contains('button', "Deu Ruim").click()
    cy.get('.swal-text').should('have.text', 'Você clicou no botão vermelho.')
})
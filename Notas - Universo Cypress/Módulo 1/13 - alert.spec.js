it('Alerta de JavaScript', function () {
    cy.viewport(1920, 1080)
    cy.visit('/javascript_alerts')
    cy.contains('button', 'Alerta').click()
    cy.on('window:alert', function (result) {
        expect (result).to.equal('Isto é uma mensagem de alerta')
    })
})
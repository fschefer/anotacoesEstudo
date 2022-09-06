it('Trabalhando com prompts', function () {
    cy.viewport(1920, 1080)
    cy.visit('/javascript_alerts')

    cy.window().then(function ($win) {
        cy.stub($win, 'prompt').returns('Suellen')
        cy.contains('button', 'Prompt').click()

    })

    cy.get('#result').should('have.text', 'Olá, Suellen')



}) 
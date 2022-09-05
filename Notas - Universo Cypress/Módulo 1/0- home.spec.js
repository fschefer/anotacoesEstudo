it('Deve abrir a homepage', function () {
    cy.viewport(1920, 1080)
    cy.visit('https://training-wheels-qaninja.herokuapp.com/')
    cy.title().should('equal', 'Training Wheels | QAninja')
    cy.get('ul[class="menu-list"]')
        .should('be.visible')
})
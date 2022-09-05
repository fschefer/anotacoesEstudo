it('Drag and drop', function () {
    const dataTransfer = new DataTransfer()

    cy.viewport(1920, 1080)
    cy.visit('/drag_and_drop')
    cy.get('img[alt=Cypress]').trigger('dragstart', { dataTransfer })
    cy.get('.nodejs figure[draggable=true]').trigger('drop', { dataTransfer })

    cy.get('img[alt="Robot Framework"]').trigger('dragstart', { dataTransfer })
    cy.get('.python figure[draggable=true]').trigger('drop', { dataTransfer })
})
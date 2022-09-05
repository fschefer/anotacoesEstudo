it('Uploading an image', function () {
    cy.viewport(1920, 1080)
    cy.visit('/upload')
    const imageFile = "cypress/fixtures/xuxu.png"     //The image will be on the /fixtures directory


    cy.get('input[name=file]').selectFile(imageFile, { force: true })
    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/xuxu.png"]', { timeout: 7000 })
        .should('be.visible')
})
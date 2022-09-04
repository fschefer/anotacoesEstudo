it('Marcando as checkboxes', function () {
    const movies = [
        'ironman',
        'avengers',
        'guardians']

    cy.viewport(1920, 1080)
    cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes')
    movies.forEach(function (m) {
        cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked')
    })
})
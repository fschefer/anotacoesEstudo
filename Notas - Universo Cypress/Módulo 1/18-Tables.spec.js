it('Validating tables', function () {
    cy.viewport(1920, 1080)
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Cobra Kai')
        .then(function (item) {
            expect(item).to.contain('Netflix')
            expect(item).to.contain('Netflix')
            expect(item).to.contain('2018')


        })
})

it('Removing "Loki"', function () {
    cy.viewport(1920, 1080)
    cy.visit('/tables')
    cy.contains('table tbody tr', 'Loki')
        .then(function (item) {
            item.find('.delete').trigger('click')
        })
        .should('not.exist')
    cy.get('table tbody tr').then(function (series) {
        expect(series).to.have.length(6)
    })
})
it('Selecting a date', function () {
    cy.viewport(1920, 1080)
    cy.visit('/datepicker')

    const bday = {
        month: 'Dec',
        year: '1999',
        day: '11'

    }

    cy.get('.datetimepicker-dummy-input').click()
    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', bday.month).click()

    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', bday.year).click()
    cy.contains('button[class=date-item]', bday.day).click()

})
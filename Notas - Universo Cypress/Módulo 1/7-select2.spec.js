it('Working with a unique selector', function () {
    cy.viewport(1920, 1080)
    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option', 'Cypress').click()
})

it('Multiple selectors', function () {
    cy.viewport(1920, 1080)
    cy.visit('/apps/select2/index.html')

    const frameworks = [
        'Cypress',
        'Selenium Webdriver',
        'Playwright'
    ]

    frameworks.forEach(function (framework) {
        cy.get('.select2-selection--multiple').click()
        cy.contains('.select2-results__option', framework).click()


    })
})
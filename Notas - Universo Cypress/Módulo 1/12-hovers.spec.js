//Instale o plugin cypress-real-events
//No arquivo cypress/support/index.js, adicione a linha "import 'cypress-real-events/support' "


it('Mouse hovering with Cypress', function () {
    cy.viewport(1920, 1080)
    cy.visit('/hovers')

    const techs = [
        { img: 'img[src*=python]', tag: '.tag-python', text: 'Python' },
        { img: 'img[src*=golang]', tag: '.tag-golang', text: 'Golang' },
        { img: 'img[src*=nodejs]', tag: '.tag-nodejs', text: 'Node.js' },
        { img: 'img[src*=netcore]', tag: '.tag-netcore', text: '.NETCore' }
    ]

    techs.forEach(function (tech) {

        cy.get(tech.img)
            .realHover('mouse')
        cy.get(tech.tag)
            .should('be.visible')
            .should('have.text', tech.text)
        cy.wait(500)

    })



})
const niceIFrame = function () {
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)

}

const badIframe = function () {
    return cy
        .get('iFrame[src*=instagram]').its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)

}

it('Trabalhando com iFrames bons', function () {
    cy.viewport(1920, 1080)
    cy.visit('/nice_iframe')
    niceIFrame().contains('.FollowerCountText', '6,997 followers')
        .should('be.visible')
})

it('iFrames ruins', function () {
    cy.viewport(1920, 1080)
    cy.visit('/bad_iframe')
    badIframe().contains('.FollowerCountText', '6,997 followers')
        .should('be.visible')
})
it('Interceptando', function () {
    const cadastro = {
        "nome": "Suellen Fernandes",
        "email": "sfernandes@email.com",
        "senha": "pwd123"
    }
    cy.visit('/signup')
    cy.get('input[placeholder="Nome"]').type(cadastro.nome)
    cy.get('input[placeholder="E-mail"]').type(cadastro.email)
    cy.get('input[placeholder="Senha"]').type(cadastro.senha)

    cy.intercept('POST', '/users',{
        statusCode: 200
    }).as('postUser')


    cy.get('button[type=submit]').click()
    cy.wait('@postUser')
    cy.get('.toast').should('be.visible')
        .find('p').should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!')
})
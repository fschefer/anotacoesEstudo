it('Remover um usuário via DB', function () {
    const cadastro = {
        "nome": "Suellen Fernandes",
        "email": "sfernandes@email.com",
        "senha": "pwd123"
    }

    cy.task('removeUser', cadastro.email).then(function (result) {
        console.log(result)
    })

    cy.visit('/signup')
    cy.get('input[placeholder="Nome"]').type(cadastro.nome)
    cy.get('input[placeholder="E-mail"]').type(cadastro.email)
    cy.get('input[placeholder="Senha"]').type(cadastro.senha)

    cy.get('button[type=submit]').click()
    cy.get('.toast').should('be.visible')
        .find('p').should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!')

})
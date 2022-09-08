import { faker } from '@faker-js/faker'
it('Cadastrando com dados gerados automaticamente', function(){
    const cadastro = {
        "nome": faker.name.fullName(),
        "email": faker.internet.email(),
        "senha": faker.internet.password()
    }
    cy.visit('/signup')
    cy.get('input[placeholder="Nome"]').type(cadastro.nome)
    cy.get('input[placeholder="E-mail"]').type(cadastro.email)
    cy.get('input[placeholder="Senha"]').type(cadastro.senha)
    cy.get('button[type=submit]').click()
    cy.get('.toast').should('be.visible')
        .find('p').should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!')
})
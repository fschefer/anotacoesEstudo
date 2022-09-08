it('Validar erro de cadastro', function(){
        const cadastro = {
            "nome": "Suellen Fernandes",
            "email": "sfernandes@email.com",
            "senha": "pwd123"
        }
        
        cy.visit('/signup')
        cy.get('input[placeholder="Nome"]').type(cadastro.nome)
        cy.get('input[placeholder="E-mail"]').type(cadastro.email)
        cy.get('input[placeholder="Senha"]').type(cadastro.senha)
        cy.get('button[type=submit]').click()
        cy.get('.toast').should('be.visible')
            .find('p').should('have.text', 'Email já cadastrado para outro usuário.')
})
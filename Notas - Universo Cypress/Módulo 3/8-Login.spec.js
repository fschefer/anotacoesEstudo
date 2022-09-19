import loginPage from '../support/Pages/Login'
import dashPage from '../support/Pages/Dash'
describe('login', function () {
    context('Casos bem sucedidos', function () {


        const user = {
            name: 'Jassa QA',
            email: 'jassa@samuraibs.com',
            senha: 'pwd123'
        }


        it('Login com sucesso', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            dashPage.userLoggedIn(user.name)

        })


    })

    context.only('Senha errada', function () {
        it('Cenário', function () {
            const user = {
                name: 'Marcel QA',
                email: 'marcel@qaninja.com',
                senha: 'pwd123@',

            }
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            cy.get('.toast').should('be.visible')
            .find('p').should('have.text', 'Ocorreu um erro ao fazer login, verifique suas credenciais.')

            //.clear(): Limpa os campos antes de rodar o teste

        })
    })



})
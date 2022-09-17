import loginPage from '../support/Pages/Login'
import dashPage from '../support/Pages/Dash'
describe('login', function(){
    context('Casos bem sucedidos', function(){


        const user = {
            name: 'Jassa QA',
            email: 'jassa@samuraibs.com', 
            senha: 'pwd123'
        }


        it('Login com sucesso', function(){
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            dashPage.userLoggedIn(user.name)
            
        })


    })
})
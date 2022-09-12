import signupPage from '../support/Pages/Signup'
import { faker } from '@faker-js/faker'

it('Fazendo cadastro', function () {
    const cadastro = {
        "nome": faker.name.fullName(),
        "email": faker.internet.email(),
        "senha": faker.internet.password()
    }
    
    
    signupPage.go()
    signupPage.form(cadastro)
    signupPage.submit()
    signupPage.validate('Agora você pode fazer seu login no Samurai Barbershop!')
})

it('Erro', function(){
    const cadastro = {
        "nome": "Suellen Fernandes",
        "email": "sfernandes@email.com",
        "senha": "pwd123"
    }
    
    
    signupPage.go()
    signupPage.form(cadastro)
    signupPage.submit()
    signupPage.validate('Email já cadastrado para outro usuário.')
})

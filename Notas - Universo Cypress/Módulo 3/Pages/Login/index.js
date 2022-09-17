class LoginPage{

    go(){
        cy.visit('/')
    }

    form(user){
        cy.get('input[placeholder=E-mail]').type(user.email)
        cy.get('input[type=password]').type(user.senha)
    }

    submit(){
        cy.get('button[type=submit]').click()
    }
}
export default new LoginPage()
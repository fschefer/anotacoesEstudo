import {el} from './elements'
class SignupPage {

    go() {
        cy.visit('/signup')

    }

    form(cadastro) {
        cy.visit('/signup')
        cy.get(el.name).type(cadastro.nome)
        cy.get(el.email).type(cadastro.email)
        cy.get(el.password).type(cadastro.senha)
    }

    submit() {
        cy.get(el.signUpButton).click()

    }
    validate(expectedMessage) {
        cy.get(el.toast).should('be.visible')
            .find('p').should('have.text', expectedMessage)
    }
}

export default new SignupPage()
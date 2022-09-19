import fpPage from '../support/Pages/forgotPassword'
describe('Resgate de senha', function(){
    before(function(){
        cy.fixture('recovery').then(function(recovery){
            this.data = recovery
        })
    })

    context('When the user forgets its password', function(){
        it('Recoverying via email', function(){
            fpPage.go()
            fpPage.form(this.data.email)
            fpPage.submit()
        })
    })



})


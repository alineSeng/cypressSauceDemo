class Login{
    navigate(){
        cy.visit("https://www.saucedemo.com/v1/")
    }

    email(username){
        cy.get('#user-name')
        .clear()
        .type(username)
        return this
    }

    password(password){
        cy.get('#password')
        .clear()
        .type(password)
        return this
    }

    submit(){
        cy.get("#login-button").click()
    }
    submit_error(){
        cy.get("#login-button").click()
        cy.get('[data-test="error"]', { timeout: 20000 }).should('be.visible');

    }
}
export default Login



class Checkout{
    first_name(firstname){
        cy.get('#first-name').type(firstname)
    }
    last_name(lastname){
        cy.get('#last-name').type(lastname)
    }
    postal_code(postalcode){
        cy.get('#postal-code').type(postalcode)
    }

    continue_button(){
        cy.get('.btn_primary.cart_button').click()  
    }

    finish(){
        cy.get('.btn_action.cart_button').click()  
    }

    check_finish_message(){
        cy.get('.complete-header').should('be.visible').should('contain', 'THANK YOU FOR YOUR ORDER') 
        cy.get('.complete-text').should('be.visible').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }

}
export default Checkout
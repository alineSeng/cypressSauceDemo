import Login from "./PageObject/login";


describe('Cypress POM test', function() {
    
    it('Login Pass', () => {
        
        const loginpage = new Login();
        
        loginpage.navigate();
        loginpage.email('standard_user');
        loginpage.password('secret_sauce');
        loginpage.submit();
        cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')
    })

    it('Login Fail', () => {
        
        const loginpage = new Login();
        
        loginpage.navigate();
        loginpage.email('locked_out_user');
        loginpage.password('secret_sauce');
        loginpage.submit_error();
    })

    

})


import Login from "./PageObject/login";
import Inventory from "./PageObject/inventory";


describe('Cypress POM test', function() {

    it('Login Fail', () => {
        
        const loginpage = new Login();
        
        loginpage.navigate();
        loginpage.email('locked_out_user');
        loginpage.password('secret_sauce');
        loginpage.submit_error();
    })

    it('Login Pass', () => {
        
        const loginpage = new Login();
        
        loginpage.navigate();
        loginpage.email('standard_user');
        loginpage.password('secret_sauce');
        loginpage.submit();
        cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')
    })

    it('Tri articles du plus cher au moins cher', () => {
        const loginpage = new Login();
        const inventorypage = new Inventory();

        loginpage.navigate();
        loginpage.email('standard_user');
        loginpage.password('secret_sauce');
        loginpage.submit();

        inventorypage.sort_from_most_expensive_to_least_expensive();
    
    })

    it('Selection 2 articles les plus cher', () => {
        const loginpage = new Login();
        const inventorypage = new Inventory();

        loginpage.navigate();
        loginpage.email('standard_user');
        loginpage.password('secret_sauce');
        loginpage.submit();

        inventorypage.sort_from_most_expensive_to_least_expensive();
        
        inventorypage.add_2_most_expensive_items_to_cart()
    })
    
    it('Aller sur le panier', () => {
        const loginpage = new Login();
        const inventorypage = new Inventory();

        loginpage.navigate();
        loginpage.email('standard_user');
        loginpage.password('secret_sauce');
        loginpage.submit();

        inventorypage.sort_from_most_expensive_to_least_expensive();
        
        inventorypage.add_2_most_expensive_items_to_cart()
        inventorypage.go_to_cart()
    })

    it('Checkout', () => {
        const loginpage = new Login();
        const inventorypage = new Inventory();

        loginpage.navigate();
        loginpage.email('standard_user');
        loginpage.password('secret_sauce');
        loginpage.submit();

        inventorypage.sort_from_most_expensive_to_least_expensive();
        
        inventorypage.add_2_most_expensive_items_to_cart()
        inventorypage.go_to_cart()

        inventorypage.checkout_click()
    
    })

})


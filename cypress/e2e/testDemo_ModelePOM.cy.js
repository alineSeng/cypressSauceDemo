import Login from "./PageObject/login";
import Inventory from "./PageObject/inventory";
import Checkout from "./PageObject/checkout";


// function login_as({username, password}){
//     const loginpage = new Login();
        
//     //loginpage.navigate();
//     loginpage.email(username);
//     loginpage.password(password);
//     loginpage.submit();
// }
function login_as(user){
    const loginpage = new Login();
        
    //loginpage.navigate();
    loginpage.email(user.username);
    loginpage.password(user.password);
    loginpage.submit();
}

describe('Cypress POM test', function() {
    const loginpage = new Login();
    const inventorypage = new Inventory();
    const checkoutpage = new Checkout();

    beforeEach(() => {
        loginpage.navigate()
        //cy.fixture('info').as('data') // charger les données depuis le fichier info.json dans le dossier fixtures
        cy.fixture('info').then((data) => {
            this.data = data;
        }); // Charger les données depuis le fichier info.json dans le dossier fixtures
    
    })
        
    it('Login Fail', () => {

        // loginpage.navigate();
        // loginpage.email('locked_out_user');
        // loginpage.password('secret_sauce');
        // loginpage.submit_error();
        
        //login_as({ username: 'locked_out_user', password: 'secret_sauce' });
        login_as(this.data.locked_out_user);
        loginpage.submit_error();

    })

    it('Login Pass', () => {
        
        //login_as({ username: 'standard_user', password: 'secret_sauce' });
        login_as(this.data.standard_user);
        cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')
    })

    it('Tri articles du plus cher au moins cher', () => {
        login_as(this.data.standard_user);

        inventorypage.sort_from_most_expensive_to_least_expensive();
    
    })

    it('Selection 2 articles les plus cher', () => {
        login_as(this.data.standard_user);

        inventorypage.sort_from_most_expensive_to_least_expensive();
        
        inventorypage.add_2_most_expensive_items_to_cart()
    })
    
    it('Aller sur le panier', () => {
        login_as(this.data.standard_user);

        inventorypage.sort_from_most_expensive_to_least_expensive();
        
        inventorypage.add_2_most_expensive_items_to_cart()
        inventorypage.go_to_cart()
    })

    it('Checkout', () => {
        login_as(this.data.standard_user);
        
        cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')

        //inventory page 
        inventorypage.sort_from_most_expensive_to_least_expensive();
        
        inventorypage.add_2_most_expensive_items_to_cart()
        inventorypage.go_to_cart()

        inventorypage.checkout_click()

        //checkout information form
        checkoutpage.first_name(this.data.first_name)
        checkoutpage.last_name(this.data.last_name)
        checkoutpage.postal_code(this.data.postal_code)  
        checkoutpage.continue_button()

        checkoutpage.finish()

        // finish page
        checkoutpage.check_finish_message()
    
    })

    

})


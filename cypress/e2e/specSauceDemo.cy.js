const { beforeEach } = require("mocha")

let Username = "locked_out_user"
let Password = "secret_sauce"

describe('Test du site Sauce Demo', () => {
  beforeEach(() => {
    cy.visit("/")
    
  })

  it('Se connecter avec un mauvais id : locket out user', () => {
    cy.get("#user-name").type(Username)
    cy.get("#password").type(Password)
    cy.get("#login-button").click()

    cy.get('[data-test="error"]', { timeout: 20000 }).should('be.visible');
  })

  it('Se connecter normalement', () => {
    
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type(Password)
    cy.get("#login-button").click()

  })

  it('Tri les articles du plus cher au moins cher', () => {
    
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type(Password)
    cy.get("#login-button").click()

    //cy.get('.product_label').click()
    cy.get('select[class="product_sort_container"]').select('hilo');
    cy.get('.inventory_item').first().find('.inventory_item_price').should('contain', "$49.99")
    cy.get('.inventory_item').eq(1).find('.inventory_item_price').should('contain', '$29.99')
    // Vérifier qu'il n'y a pas d'autres produits avec un prix supérieur aux deux premiers
    cy.get('.inventory_item').eq(2).find('.inventory_item_price').should('not.contain', '$29.99')

  }) 

  it('Sélectionner les 2 plus cher', () => {
    
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type(Password)
    cy.get("#login-button").click()

    cy.get(".btn_primary.btn_inventory").eq(0).click()
    cy.get(".btn_primary.btn_inventory").eq(0).click()

  })

  it('Aller sur le panier', () => {
    
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type(Password)
    cy.get("#login-button").click()

    cy.get(".btn_primary.btn_inventory").eq(0).click()
    cy.get(".btn_primary.btn_inventory").eq(0).click()

    cy.get('#shopping_cart_container').click()

  })

  it('Checkout', () => {
    
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type(Password)
    cy.get("#login-button").click()

    cy.get(".btn_primary.btn_inventory").eq(0).click()
    cy.get(".btn_primary.btn_inventory").eq(0).click()

    cy.get('#shopping_cart_container').click()
    cy.get('.btn_action.checkout_button').click()

    cy.get('#first-name').type("aline")
    cy.get('#last-name').type("SG")
    cy.get('#postal-code').type("59000")

    cy.get('.btn_primary.cart_button').click()

    cy.get('.btn_action.cart_button').click()

    
    cy.get('h2.complete-header').should('be.visible')
    //cy.screenshot()
    cy.get('.complete-header').contains("THANK YOU FOR YOUR ORDER")
    cy.get('.complete-text').contains("Your order has been dispatched, and will arrive just as fast as the pony can get there!")

    
  })


  
})
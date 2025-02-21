class Inventory {
    sort_from_most_expensive_to_least_expensive(){
        //cy.get('.product_label').click()
        cy.get('select[class="product_sort_container"]').select('hilo');
        cy.get('.inventory_item').first().find('.inventory_item_price').should('contain', "$49.99")
        cy.get('.inventory_item').eq(1).find('.inventory_item_price').should('contain', '$29.99')
        // Vérifier qu'il n'y a pas d'autres produits avec un prix supérieur aux deux premiers
        cy.get('.inventory_item').eq(2).find('.inventory_item_price').should('not.contain', '$29.99')
    }
    
    select_2_most_expensive_items(){
        cy.get(".btn_primary.btn_inventory").eq(0).click()
        cy.get(".btn_primary.btn_inventory").eq(0).click()
    }

    add_2_most_expensive_items_to_cart(){
        cy.get(".btn_primary.btn_inventory").eq(0).click()
        cy.get(".btn_primary.btn_inventory").eq(0).click()
    
    }

    go_to_cart(){
        cy.get('#shopping_cart_container').click()
    }

    checkout_click(){
        cy.get('.btn_action.checkout_button').click()
    }

}
export default Inventory
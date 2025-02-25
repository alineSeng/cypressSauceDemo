

Feature:	Inscription et Achat produit en ligne sur le site : https://automationexercise.com/	
		
Scenario:	Ajout premier article au panier	
	Given	Je suis sur le site https://automationexercise.com/
	When	Je selectionne le premier article et je l'ajoute au panier
	Then 	Je vais aller au panier
		
Scenario:	Créer un compte	
	Given	Je vais aller au panier
	When 	Je clique sur "Proceed To Checkout"
	Then 	Le popup checkout apparait
	When 	Je clique sur "Register / Login"
	Then 	J'accède à la page Login et Signup
	When 	Je rempli le formulaire Signup avec le champs Name et Email Adress
	And 	Je clique sur le bouton signup
	Then 	Le formulaire pour renseigner les informaions personnelles apparait
	When 	Je renseigne tous les informations demandées
	And 	Je clique sur le bouton Create Account
	Then 	Mon compte est bien créer 
		
Scenario:	Checkout	
	Given	Je selectionne le premier article et je l'ajoute au panier
	And 	Je vais aller au panier
	When	Je clique sur "Proceed To Checkout"
	Then 	La page de confirmation de commande avec les details sont bien visible
	When 	Je clique sur le bouton Place Order
	Then 	La page de paiement apparait 
	When 	Je rempli les inforamtions bancaires 
	And 	Je clique sur le bouton Pay and Confirm Order 
	Then 	La page de confirmation de paiement reussi est bien visible 

Description



Ce projet implémente un système de commande interactif où l'utilisateur peut sélectionner des articles d'un menu et les ajouter à un panier avant de procéder au paiement.



Fonctionnalités



1. Navigation et Affichage des Modales

Lorsqu'un utilisateur clique sur "Commander" depuis la page principale, la fonction displayModal1 affiche la première fenêtre modal. Ce modal a un code fixe qui se trouve dans le index.html.

Depuis cette modale, l'utilisateur peut naviguer vers différentes catégories ou revenir à la page d'accueil en utilisant la fonction Backhomepage.

À chaque retour à displayModal1, l'innerHTML de la précédente modale est effacé afin de garantir que seule la nouvelle catégorie sélectionnée s'affiche correctement.



2. Sélection des Articles et Ajout au Panier

Chaque displayModal (2-6) affiche dynamiquement à partir du JS les éléments de la catégorie sélectionnée.

Cliquer sur "Nos menus" appelle la fonction AfficherMenus()

Cliquer sur "Nos Sandwichs" appelle la fonction AfficherBurger()

Cliquer sur "Petite faim" appelle la fonction AfficherPetiteFaim()

Cliquer sur "Nos Boissons" appelle la fonction AfficherBoissons()

Cliquer sur "Desserts" appelle la fonction AfficherDesserts()

Les pages s'ouvrant à partir de clics sur Nos Sandwichs, Petite Faim, Nos Boissons et Nos dessers ouvrent un modal affichant tous les articles. Chaque article à un bouton "Commander". Le clic sur ce bouton execute la fonction AjouterAuPanier () qui elle meme appelle la fonction Afficher Panier() qui permet un affichage dynamique des éléments du panier (il est possible de les supprimer via la fonction supprimerArticle.



A partir de Nos Menus, le clic ouvre un modal ou le contenu dynamique s'affiche grace à AfficherMenu(). 
Le bouton commander en dessous de chaque menus execute la fonction ProcessMenuOrderBurgers()à qui affiche la liste des burgers en filtrant ceux qui sont disponibles en menu.
Lorsqu'on commande un menu, la fonction ProcessMenuOrdeSides vient s'exécuter en prenant en paramètre l'id du burger sélectionne à partir de l'id du burger affiché. Elle récupère en premier lieu et stock dans la variable BurgerId l'id du burger sélectionné. Elle affiche tous les sides via AfficherPetiteFaimsMenu (qui est une fonction similaire à AfficherPetiteFaim mais qui execute une fonction différente au clic sur le bouton de la card) et filtre ensuite les sides disponibles pour le menu sélectionné.
Lorsqu'on sélectionne une boisson, la fonction ProcessMenuOrderDrinks vient s'executer en prenant en paramètre BurgerId. Elle affiche toutes les boissons via AfficherBoissonsMenu (qui est une fonction similaire à AfficherBoissons mais qui execute une fonction différente au clic sur le bouton de la card) et filtre ensuite les boisons disponibles pour le menu sélectionné.

Ensuite on peut ajouter au panier.

Le panier suit et met à jour automatiquement le prix total des articles sélectionnés.



3. Passage de la Commande et Paiement

En cliquant sur "Commander" depuis le panier, une page blanche s'affiche avec les informations de paiement.

Lorsque l'utilisateur clique sur "Payer maintenant", un ticket de commande aléatoire est généré à l'aide des fonctions Math.random() et Math.floor().




Technologies utilisées


- HTML pour la structure des pages.

- Bootstrap & CSS pour le style et la mise en page.

- JavaScript pour la gestion dynamique des éléments, la navigation entre les modales, le suivi du panier et la génération du ticket.




Instructions d'utilisation



1. Cliquer sur "Commander" depuis la page principale.

2. Choisir une catégorie et sélectionner des articles.

3. Ajouter des articles au panier et visualiser le total.

4. Passer la commande et accéder à la page de paiement.

5. Finaliser le paiement et obtenir un ticket de confirmation.



Auteurs :

ANTOINE - "the carry" de projet
YVAN
MIKOLAJ

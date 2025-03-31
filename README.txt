--Description--

This project implements an interactive ordering system where users can select items from a menu, add them to a cart, and proceed to checkout.

--Features--

1. Navigation and Modal Display

When a user clicks "Order" from the main page, the function displayModal1 opens the first modal window. This modal has a fixed structure in index.html.
From this modal, the user can navigate to different categories or return to the homepage using the function Backhomepage.
Each time displayModal1 is reopened, the previous modal’s innerHTML is cleared to ensure that only the newly selected category is displayed correctly.

2. Item Selection and Cart Management

Each displayModal (2-6) dynamically displays elements from the selected category using JavaScript.

- Clicking "Our Menus" calls the function AfficherMenus().
- Clicking "Our Sandwiches" calls the function AfficherBurger().
- Clicking "Small Hunger" calls the function AfficherPetiteFaim().
- Clicking "Our Drinks" calls the function AfficherBoissons().
- Clicking "Desserts" calls the function AfficherDesserts().

The pages that open from Our Sandwiches, Small Hunger, Our Drinks, and Desserts display a modal with all the category’s items. Each item has an "Order" button. Clicking this button executes the function AjouterAuPanier(), which in turn calls AfficherPanier(). This allows the cart items to be displayed dynamically (items can also be removed using the function supprimerArticle()).

When selecting a menu from "Our Menus," a modal opens, and the dynamic content is displayed via AfficherMenu().

Clicking the "Order" button below a menu executes the function ProcessMenuOrderBurgers(), which displays a filtered list of burgers available in a menu.

After selecting a burger, the function ProcessMenuOrderSides() is executed, taking the burger ID as a parameter. It first stores the selected burger ID in the variable BurgerId and then displays all available sides using AfficherPetiteFaimsMenu(). This function filters sides that match the chosen menu.

When selecting a drink, ProcessMenuOrderDrinks() is executed, taking BurgerId as a parameter. It displays all available drinks via AfficherBoissonsMenu(), filtering them according to the selected menu.

Once all selections are made, the order can be added to the cart.

The cart continuously updates and displays the total price of selected items.


3. Order Processing and Payment

Clicking "Order" from the cart opens a payment page.
When the user clicks "Pay Now," a random order ticket is generated using Math.random() and Math.floor().


--Technologies Used--

HTML – for structuring the pages.
Bootstrap & CSS – for styling and layout.
JavaScript – for dynamic content management, modal navigation, cart tracking, and ticket generation.

--Instructions for Use--

1. Click "Order" from the main page.
2. Choose a category and select items.
3. Add items to the cart and view the total price.
4. Place the order and proceed to the payment page.
5. Complete the payment and receive a confirmation ticket.

--Authors--

ANTOINE
YVAN
MIKOLAJ



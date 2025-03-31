let donnees = []
let optionMenus=document.getElementById("OptionMenus")
let optionBurgers=document.getElementById("OptionBurgers")
let optionPetiteFaim=document.getElementById("OptionPetiteFaim")
let optionBoissons=document.getElementById("OptionBoissons")
let optionDesserts=document.getElementById("OptionDesserts")
let optionEnfants=document.getElementById("OptionEnfants")

fetch('mcdo.json') /* On lance la requete en AJAX pour recuperer le fichier JSON*/
    .then(function(reponse) { /*Ensuite on attend la réponse de notre requete*/
    return reponse.json(); /*Si tout se passe bien on transforme data.json en objet js*/
    })

    .then(function(produits) { /*On stock ces données dans le tableai "données"*/
    donnees = produits;
    })

    .catch(function(error) { /* Si jamais la recuperation ne fonctionne pas */
    console.error("Erreur lors du chargement du fichier JSON :", error); /*message d'erreur*/
    });

//FUNCTIONS

// MIKO //

    let modalOne = document.getElementById("modal1");
    let modalTwo = document.getElementById("modal2");
    let cmdBtn = document.getElementById("command-btn");
    let backBtn = document.getElementById("back-btn");
    let btnMenu = document.getElementById("btnMenu");

    // 1. afficher le modalOne 

    function DisplayModal1() {
        cmdBtn.addEventListener("click", function () {
            if (modalOne.classList.contains("hiddenmodal")) {
                modalOne.classList.remove("hiddenmodal");
                // setTimeout(() => {
                    modalOne.classList.add("opacitymodal");
                // }, 100);
            }
        });
    }

    function Backhomepage() {
        if (!modalOne.classList.contains("hiddenmodal")) {
            modalOne.classList.add("hiddenmodal");
        }
    }

    function displayModal2() {
        if (modalTwo.classList.contains("hiddenmodal")) {
            modalTwo.classList.remove("hiddenmodal");
            modalOne.classList.add("hiddenmodal");
            AfficherMenus();
        }
    }

    function displayModal3() {
        if (modalTwo.classList.contains("hiddenmodal")) {
            modalTwo.classList.remove("hiddenmodal");
            modalOne.classList.add("hiddenmodal");
            AfficherBurger();
        }
    }

    function displayModal4() {
        if (modalTwo.classList.contains("hiddenmodal")) {
            modalTwo.classList.remove("hiddenmodal");
            modalOne.classList.add("hiddenmodal");
            AfficherPetiteFaim();
        }
    }

    function displayModal5() {
        if (modalTwo.classList.contains("hiddenmodal")) {
            modalTwo.classList.remove("hiddenmodal");
            modalOne.classList.add("hiddenmodal");
            AfficherBoissons();
        }
    }

    function displayModal6() {
        if (modalTwo.classList.contains("hiddenmodal")) {
            modalTwo.classList.remove("hiddenmodal");
            modalOne.classList.add("hiddenmodal");
            AfficherDesserts();
        }
    }

    function BackModal1() {
        modalTwo.classList.add("hiddenmodal");
        modalOne.classList.remove("hiddenmodal");
        optionMenus.innerHTML = "";
        optionBurgers.innerHTML = "";
        optionBoissons.innerHTML = "";
        optionDesserts.innerHTML = "";
        optionEnfants.innerHTML = "";
        optionPetiteFaim.innerHTML = "";
    }

    btnMenu.addEventListener("click", displayModal2);
    cmdBtn.addEventListener("click", DisplayModal1);
    backBtn.addEventListener("click", Backhomepage);



    // ANTOINE //


    function AfficherBurger(){
        for (let i=0; i<donnees.burgers.length;i++){
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div id=${donnees.burgers[i].id} class="card" style="width: 18rem;">
            <img src="/${donnees.burgers[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.burgers[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.burgers[i].price} euros</p>
                <button class="btn btn-primary" onclick="ajouterAuPanier('${donnees.burgers[i].name}', ${donnees.burgers[i].price})">Commander</button>
            </div>
        </div>
        `;
        optionBurgers.appendChild(menu);
        }
    }
    
    function AfficherPetiteFaim(){
        for (let i=0; i<donnees.sides.length;i++){
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div id=${donnees.sides[i].id} class="card" style="width: 18rem;">
            <img src="/${donnees.sides[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.sides[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.sides[i].price} euros</p>
                <button class="btn btn-primary" onclick="ajouterAuPanier('${donnees.sides[i].name}', ${donnees.sides[i].price})">Commander</button>
            </div>
        </div>
        `;
        optionPetiteFaim.appendChild(menu);
        }
    }
    
    function AfficherBoissons(){
        for (let i=0; i<donnees.drinks.length;i++){
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div id=${donnees.drinks[i].id} class="card" style="width: 18rem;">
            <img src="/${donnees.drinks[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.drinks[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.drinks[i].price} euros</p>
                <button class="btn btn-primary" onclick="ajouterAuPanier('${donnees.drinks[i].name}', ${donnees.drinks[i].price})">Commander</button>
            </div>
        </div>
        `;
        optionBoissons.appendChild(menu);
        }
    }
    
    function AfficherDesserts(){
        for (let i=0; i<donnees.desserts.length;i++){
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div id=${donnees.desserts[i].id} class="card" style="width: 18rem;">
            <img src="/${donnees.desserts[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.desserts[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.desserts[i].price} euros</p>
                <button class="btn btn-primary" onclick="ajouterAuPanier('${donnees.desserts[i].name}', ${donnees.desserts[i].price})">Commander</button>
            </div>
        </div>
        `;
        optionDesserts.appendChild(menu);
        }
    }
    
    function AfficherEnfants(){
        for (let i=0; i<donnees.happyMeal.length;i++){
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div id=${donnees.happyMeal[i].id} class="card" style="width: 18rem;">
            <img src="/${donnees.happyMeal[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.happyMeal[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.happyMeal[i].price} euros</p>
                <button class="btn btn-primary" onclick="ajouterAuPanier('${donnees.happyMeal[i].name}', ${donnees.happyMeal[i].price})">Commander</button>
            </div>
        </div>
        `;
        optionEnfants.appendChild(menu);
        }
    }

    function AfficherBoissonsMenu(){
        for (let i=0; i<donnees.drinks.length;i++){
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="/${donnees.drinks[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.drinks[i].name}</h5>
                <button id="cmdbutton" class="btn btn-primary" onclick="">Commander</button>
            </div>
        </div>
        `;
        optionBoissons.appendChild(menu);
        }
    }

    function AfficherPetiteFaimMenu(){
        for (let i=0; i<donnees.sides.length;i++){
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div id=${donnees.sides[i].id} class="card" style="width: 18rem;">
            <img src="/${donnees.sides[i].image}" aclass="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.sides[i].name}</h5>
                <button class="btn btn-primary" onclick="ProcessMenuOrderDrinks(BurgerId)">Commander</button>
            </div>
        </div>
        `;
        optionPetiteFaim.appendChild(menu);
        }
    }

    function AfficherMenus() {
        for (let i=0; i<donnees.menus.length;i++) {
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div id=${donnees.menus[i].main} class="card" style="width: 18rem;">
            <img src="/${donnees.menus[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center align">
                <h5 class="card-title">${donnees.menus[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.menus[i].price} euros</p>
                <button id="${donnees.menus[i].id}" class="btn btn-primary" onclick="ProcessMenuOrderSides(${donnees.menus[i].main})">Commander</button>
            </div>
        </div>
        `;
        optionMenus.appendChild(menu);
        }
    }

    function ProcessMenuOrderBurgers(){
        AfficherBurger()
        let burgersinmenu=[]
        for (j=0; j<donnees.menus.length; j++){
            //choix burger
            burgersinmenu.push(donnees.menus[j].main);
            console.log (burgersinmenu);
        }
        for (i=0; i<donnees.burgers.length; i++){
            if (!burgersinmenu.includes(donnees.burgers[i].id)){
                document.getElementById(donnees.burgers[i].id).classList.add("d-none")
            }
        }
    }
    
    let BurgerId = "";

    // Fonction pour filtrer sur les sides offerte en focntion du burger choisi
    function ProcessMenuOrderSides(id) {
        document.addEventListener("click", function(event) {
            if (event.target.tagName.toLowerCase() === "button") {
              BurgerId = event.target.id;
            }
        });
        optionMenus.innerHTML = "";
        optionBurgers.innerHTML = "";
        optionBoissons.innerHTML = "";
        optionDesserts.innerHTML = "";
        optionEnfants.innerHTML = "";
        optionPetiteFaim.innerHTML = "";
        AfficherPetiteFaimMenu()
        for (j=0; j<donnees.menus.length; j++){
            //choix sides
            if(donnees.menus[j].id==id){
                for (i=0; i<donnees.sides.length; i++){
                    console.log(donnees.menus[j].sideOptions);
                    console.log(donnees.sides[i].id);
                    if (!donnees.menus[j].sideOptions.includes(donnees.sides[i].id)){
                        console.log(donnees.sides[i].id)
                        console.log("test")
                        document.getElementById(donnees.sides[i].id).classList.add("d-none")
                    }
                }
            }
        }
    }
    
    // Fonction pour filtrer sur les boissons offerte en focntion du burger choisi
    

    function ProcessMenuOrderDrinks(id){
        optionMenus.innerHTML = "";
        optionBurgers.innerHTML = "";
        optionBoissons.innerHTML = "";
        optionDesserts.innerHTML = "";
        optionEnfants.innerHTML = "";
        optionPetiteFaim.innerHTML = "";
        AfficherBoissonsMenu()
        for (j=0; j<donnees.menus.length; j++){
            //choix dinks      
            if(donnees.menus[j].id==id){
                for (i=0; i<donnees.drinks.length; i++){
                    if (!donnees.menus[j].drinkOptions.includes(donnees.drinks[i].id)){
                        document.getElementById(donnees.drinks[i].id).classList.add("d-none")
                    }
                }
            }
        }
        
    }
    function ProcessMenuOrder(){
        ProcessMenuOrderBurgers();
        ProcessMenuOrderSides(id);
        ProcessMenuOrderDrinks(id);
    }


    // MIKO //


let panier = [];


function afficherPanier() {
    let panierList = document.getElementById("panier-list");
    let totalPrix = document.getElementById("total-prix");

    panierList.innerHTML = "";

    let total = 0;

    panier.forEach((item, index) => {
        total += item.prix;

        let li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        li.innerHTML = `
            <span>${item.nom} - ${item.prix.toFixed(2)}€</span>
            <button class="btn btn-danger btn-sm" onclick="supprimerArticle(${index})">Supprimer</button>
        `;

        panierList.appendChild(li);
    });

    totalPrix.innerHTML = `Total : <span>${total.toFixed(2)}€</span>`;
}

// Fonction supprimer
function supprimerArticle(index) {
    panier.splice(index, 1);
    afficherPanier();
}

afficherPanier();
    
let commanderBtn = document.getElementById("commander-btn");
    let panierModal = document.getElementById("panier-modal");
    let paiementModal = document.getElementById("paiement-modal");
    let payerBtn = document.getElementById("payer-btn");

    if (commanderBtn && panierModal && paiementModal && payerBtn) {
        commanderBtn.addEventListener("click", function () {
            panierModal.classList.add("hiddenmodal");
            modalOne.classList.add("hiddenmodal");
            modalTwo.classList.add("hiddenmodal");
            document.getElementById("main-menu").classList.add("hiddenmodal");
            paiementModal.classList.remove("hiddenmodal");
        });

        // ticket au hasard //
        payerBtn.addEventListener("click", function (e) {
            e.preventDefault();

            let ticketNumber = Math.floor(100000 + Math.random() * 900000);

            let ticketDiv = document.createElement("div");
            ticketDiv.classList.add("alert", "alert-success", "text-center", "mt-3");
            ticketDiv.innerHTML = `<h4>Votre ticket</h4><p>Numéro: <strong>${ticketNumber}</strong></p>`;

            paiementModal.appendChild(ticketDiv);
        });
    } else {
        console.error("Un ou plusieurs éléments n'ont pas été trouvés!");
    }

    function ajouterAuPanier(nom, prix) {
        panier.push({ nom: nom, prix: prix });
        afficherPanier();

        panierModal.classList.remove("hiddenmodal");
        modalTwo.classList.add("hiddenmodal");
        modalOne.classList.remove("hiddenmodal");

        optionMenus.innerHTML = "";
        optionBurgers.innerHTML = "";
        optionBoissons.innerHTML = "";
        optionDesserts.innerHTML = "";
        optionEnfants.innerHTML = "";
        optionPetiteFaim.innerHTML = "";
    }
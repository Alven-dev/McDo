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
    // 
    // AfficherBoissons();
    // AfficherBurger();
    // AfficherDesserts();
    // AfficherEnfants();
    // AfficherPetiteFaim();
    })

    .catch(function(error) { /* Si jamais la recuperation ne fonctionne pas */
    console.error("Erreur lors du chargement du fichier JSON :", error); /*message d'erreur*/
    });

//SCRIPT

//ModalCommander=document.getElementById("commander")


//FUNCTIONS

// MIKO //

    let modalOne = document.getElementById("modal1");
    let modalTwo = document.getElementById("modal2");
    let cmdBtn = document.getElementById("command-btn");
    let backBtn = document.getElementById("back-btn");
    let btnMenu = document.getElementById("btnMenu");

    function DisplayModal1() {
        cmdBtn.addEventListener("click", function () {
            if (modalOne.classList.contains("hiddenmodal")) {
                modalOne.classList.remove("hiddenmodal");
                setTimeout(() => {
                    modalOne.classList.add("opacitymodal");
                }, 100);
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


    function AfficherMenus() {
        for (let i=0; i<donnees.menus.length;i++) {
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div id="menus${i}" class="card" style="width: 18rem;">
            <img src="/${donnees.menus[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center align">
                <h5 class="card-title">${donnees.menus[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.menus[i].price} pessos</p>
                <button class="btn btn-primary" onclick="">Commander</button>
            </div>
        </div>
        `;
        optionMenus.appendChild(menu);
        }
    }

    function AfficherBurger(){
        for (let i=0; i<donnees.burgers.length;i++){
            let menu=document.createElement("div")
            menu.innerHTML = `
            <div id=burgers${i} class="card" style="width: 18rem;">
            <img src="/${donnees.burgers[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.burgers[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.burgers[i].price} pessos</p>
                <button class="btn btn-primary" onclick="">Commander</button>
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
            <div id=sides${i} class="card" style="width: 18rem;">
            <img src="/${donnees.sides[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.sides[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.sides[i].price} pessos</p>
                <button class="btn btn-primary" onclick="">Commander</button>
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
            <div id=drinks${i} class="card" style="width: 18rem;">
            <img src="/${donnees.drinks[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.drinks[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.drinks[i].price} pessos</p>
                <button class="btn btn-primary" onclick="">Commander</button>
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
            <div id=desserts${i} class="card" style="width: 18rem;">
            <img src="/${donnees.desserts[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.desserts[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.desserts[i].price} pessos</p>
                <button class="btn btn-primary" onclick="">Commander</button>
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
            <div id=happyMeal${i} class="card" style="width: 18rem;">
            <img src="/${donnees.happyMeal[i].image}" class="card-img-top" alt="Image du produit">
            <div class="card-body text-center">
                <h5 class="card-title">${donnees.happyMeal[i].name}</h5>
                <p class="card-text fw-bold">Prix: ${donnees.happyMeal[i].price} pessos</p>
                <button class="btn btn-primary" onclick="">Commander</button>
            </div>
        </div>
        `;
        optionEnfants.appendChild(menu);
        }
    }
    
/*Code card minature
<div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="Image du produit">
    <div class="card-body text-center">
        <h5 class="card-title">Nom du Produit</h5>
        <p class="card-text fw-bold">Prix: 29.99€</p>
        <button class="btn btn-primary" onclick="">Commander</a>
    </div>
</div>
*/

/* Code card details
<div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="Image du produit">
    <div class="card-body text-center">
            <h5 class="card-title">Nom du Produit</h5>
            <p class="card-text">Description du produit : Ce produit est parfait pour vos besoins quotidiens. Il offre une qualité exceptionnelle et une grande durabilité.</p>
            <p class="card-text fw-bold">Prix: 29.99€</p>
            <p class="card-text text-muted">Calories brûlées : 250 kcal</p>
            <button class="btn btn-primary" onclick="">Commander</a>
        </div>
    </div>
</div>
*/


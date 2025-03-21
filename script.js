let donnees = []

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

//SCRIPT

//ModalCommander=document.getElementById("commander")


//FUNCTIONS

let modalOne = document.getElementById("modal1");
let modalTwo = document.getElementById("modal2");
let cmdBtn = document.getElementById("command-btn");
let backBtn = document.getElementById("back-btn");
let btnMenu = document.getElementById("btnMenu");

function DisplayModal1() {
    cmdBtn.addEventListener("click", function () {
        if (modalOne.classList.contains("hiddenmodal")) {
            modalOne.classList.remove("hiddenmodal");
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
    }
}

function BackModal1() {
    modalTwo.classList.add("hiddenmodal");
    modalOne.classList.remove("hiddenmodal");
}

// Add event listeners
btnMenu.addEventListener("click", displayModal2);
cmdBtn.addEventListener("click", DisplayModal1);
backBtn.addEventListener("click", Backhomepage);

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

123
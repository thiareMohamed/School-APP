const key_api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2NjA4NSwiZXhwIjoxOTU1ODQyMDg1fQ.b6Z4XOdbU0JG_SLsx25qW1UGobcpS3BycdoCIqoidfE"
const url_api = "https://wcnhlgmpfqojryqbcxai.supabase.co/rest/v1/Apprenant"
let donnee
// Recuperation du DOM
const formulaire = document.querySelector('.form')
const all = document.querySelectorAll('input')
const niveau = document.querySelector('select')
const bio = document.querySelector('textarea')
const espaceCarte = document.querySelector('.espace-carte')

// Declaration des variables
let donnees = []
let newObj = {}

formulaire.addEventListener('submit', (e)=>{
    e.preventDefault();
    let apprenants = 
    {
        nom : all[0].value,
        prenom : all[1].value,
        niveau: niveau.value,
        bio: bio.value, 
        front: all[2].value,
        back: all[3].value
    }
    newObj = donnees.push(apprenants)
    formulaire.reset()
    // console.log(newObj);
    creerCarte(donnees)
})

// Les evenements
function creerCarte(donnees)
{
    let objRetourner = {}
    // Creation des apprenant
    donnee = donnees[donnees.length - 1]
    fetch("https://wcnhlgmpfqojryqbcxai.supabase.co/rest/v1/apprenantProvisoir", {
            method: "POST",
            headers: {
              apikey: key_api,
              "Content-Type": "application/json",
              Prefer: "return=representation",
            },
            body: JSON.stringify(donnee),
          }).then(response => response.json())
          .then((data) => {
            // Afficher les donnees
            console.log(data[0]);
            objRetourner = data[0]
            espaceCarte.insertAdjacentHTML(
                "beforeend",
                `
                    <form action="#">
                        <div class="carte-${objRetourner.id} mb-3" id="${objRetourner.nom + objRetourner.prenom}" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="../img/lou.jpg" class="img-fluid img-carte rounded-start" alt="..." accept="image/png, image/jpeg" id="img">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="nom-carte ">${objRetourner.nom +" "+ objRetourner.prenom}</h5>
                                        <p class="bio-carte">${objRetourner.bio}.</p>
                                        <p class="card-text"><small class="niveau-carte">${objRetourner.niveau}</small></p>   
                                        <div class="text-end">
                                        <input type="submit" hidden class="btn btn-warning text-light shadow-sm w-100" value="Ajouter">

                                            <i class="bi bi-pen" onclick="modifierCarte(${objRetourner.id})"></i> <i class="bi bi-trash btn-delete text-danger" onclick="deleteCarte(${objRetourner.id})"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                `
            )
        })
        
}

// Sauvegarder les cartes terminees
document.querySelector('#sauvegarder').addEventListener('click', ()=>{
    fetch(url_api, {
        method: "POST",
        headers: {
          apikey: key_api,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donnees),
      })
        return donnees = []
})

// Suppression de la carte
function deleteCarte(id)
{
    let CartASupprimer = document.querySelector(`.carte-${id}`)
    fetch("https://wcnhlgmpfqojryqbcxai.supabase.co/rest/v1/apprenantProvisoir?id=eq." + id, {
        method: "DELETE",
        headers: {
        apikey: key_api,
        'Authorization' : `Bearer ${key_api}`
        },
    })
}
function modifierCarte (id){
    c
}
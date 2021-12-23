const key_api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2NjA4NSwiZXhwIjoxOTU1ODQyMDg1fQ.b6Z4XOdbU0JG_SLsx25qW1UGobcpS3BycdoCIqoidfE"
const url_api = "https://wcnhlgmpfqojryqbcxai.supabase.co/rest/v1/Apprenant"

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
    // Creation des apprenant
    let donnee = donnees[donnees.length - 1]
    
        espaceCarte.insertAdjacentHTML(
            "beforeend",
            `
                <div class="carte mb-3" id="${donnee.nom + donnee.prenom}" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="../img/lou.jpg" class="img-fluid img-carte rounded-start" alt="..." accept="image/png, image/jpeg" id="img">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="nom-carte ">${donnee.nom +" "+ donnee.prenom}</h5>
                                <p class="bio-carte">${donnee.bio}.</p>
                                <p class="card-text"><small class="niveau-carte">${donnee.niveau}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    console.log(donnees);
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
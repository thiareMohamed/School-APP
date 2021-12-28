const key_api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2NjA4NSwiZXhwIjoxOTU1ODQyMDg1fQ.b6Z4XOdbU0JG_SLsx25qW1UGobcpS3BycdoCIqoidfE"
const url_api = "https://wcnhlgmpfqojryqbcxai.supabase.co/rest/v1/Apprenant"
const listeApprenants = document.querySelector('.liste-apprenants')
const apprenant = document.querySelector('.apprenant')

fetch(url_api, {
    headers: {
      apikey: key_api,
      "Content-Type": "application/json",
    },
  }).then((donnees) => donnees.json())
  .then((donnees) => {
      // Afficher les donnees
      for (let donnee of donnees)
      {
        afficherCarte (donnee)
      }
  })
function afficherCarte(donnee)
{    // Creation des apprenant
    listeApprenants.insertAdjacentHTML(
        "beforeend",
        `
            <div class="carte-apprenant mb-3" id="${donnee.id}" onclick="afficher(${donnee.id}  "style="max-width: 540px;">
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
}
document.querySelector('.retour').style.visibility = "hidden"; 

function afficher(id)
{
    fetch(url_api, {
        headers: {
          apikey: key_api,
          "Content-Type": "application/json",
        },
      }).then((donnees) => donnees.json())
      .then((donnees) => {
          // Afficher les donnees
          for (let donnee of donnees)
          {
            showCarte(id,donnee)
          }
      })
}
function showCarte(id,table)
{
    if(table.id == id)
    {
        document.querySelector('.liste-apprenants').style.visibility = "hidden"; 
        apprenant.hidden = false
        document.querySelector('.retour').style.visibility = "visible"; 
        apprenant.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card mb-3">
                <div class="card-header d-flex justify-content-between"> 
                    <img src="/img/lou.jpg" class="card-img-top" alt="..." style="max-width: 300px;">
                    <div>
                        <h5 class="card-title">${table.nom +" "+ table.prenom}</h5>
                        <p class="niveau">${table.niveau}</p>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">${table.bio}.</p>
                    <div class="competences">
                        <div class="progress mb-3">
                            <div class="progress-bar" role="progressbar" style="width: ${table.front}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Front-end</div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: ${table.back}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Back-end</div>
                        </div>
                    </div>
                </div>
            </div>
            `
            )
    }
}
document.querySelector('.retour').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.liste-apprenants').style.visibility = "visible"; 
    apprenant.hidden = true
    document.querySelector('.retour').style.visibility = "hidden";
    apprenant.removeChild(document.querySelector('.card'))
})
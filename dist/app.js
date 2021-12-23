/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const key_api = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2NjA4NSwiZXhwIjoxOTU1ODQyMDg1fQ.b6Z4XOdbU0JG_SLsx25qW1UGobcpS3BycdoCIqoidfE\"\nconst url_api = \"https://wcnhlgmpfqojryqbcxai.supabase.co/rest/v1/Apprenant\"\n\n// Recuperation du DOM\nconst formulaire = document.querySelector('.form')\nconst all = document.querySelectorAll('input')\nconst niveau = document.querySelector('select')\nconst bio = document.querySelector('textarea')\nconst espaceCarte = document.querySelector('.espace-carte')\n\n// Declaration des variables\nlet donnees = []\nlet newObj = {}\n\n\nformulaire.addEventListener('submit', (e)=>{\n    e.preventDefault();\n    let apprenants = \n    {\n        nom : all[0].value,\n        prenom : all[1].value,\n        niveau: niveau.value,\n        bio: bio.value, \n        front: all[2].value,\n        back: all[3].value\n    }\n    newObj = donnees.push(apprenants)\n    formulaire.reset()\n    // console.log(newObj);\n    creerCarte(donnees)\n})\n\n\n// Les evenements\nfunction creerCarte(donnees)\n{\n    // Creation des apprenant\n    let donnee = donnees[donnees.length - 1]\n    \n        espaceCarte.insertAdjacentHTML(\n            \"beforeend\",\n            `\n                <div class=\"carte mb-3\" id=\"${donnee.nom + donnee.prenom}\" style=\"max-width: 540px;\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-md-4\">\n                            <img src=\"../img/lou.jpg\" class=\"img-fluid img-carte rounded-start\" alt=\"...\" accept=\"image/png, image/jpeg\" id=\"img\">\n                        </div>\n                        <div class=\"col-md-8\">\n                            <div class=\"card-body\">\n                                <h5 class=\"nom-carte \">${donnee.nom +\" \"+ donnee.prenom}</h5>\n                                <p class=\"bio-carte\">${donnee.bio}.</p>\n                                <p class=\"card-text\"><small class=\"niveau-carte\">${donnee.niveau}</small></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            `\n        )\n    console.log(donnees);\n}\n\n// Sauvegarder les cartes terminees\ndocument.querySelector('#sauvegarder').addEventListener('click', ()=>{\n    fetch(url_api, {\n        method: \"POST\",\n        headers: {\n          apikey: key_api,\n          \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(donnees),\n      })\n        return donnees = []\n})\n\n//# sourceURL=webpack://School-APP/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;
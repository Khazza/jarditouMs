//--------------- EXERCICE 2 - TABLE DE MULTIPLICATION  -------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°2
function displayMultiplicationTable(num) {
  //Demande à l'utilisateur de saisir jusqu'à quel multiple
  let range = prompt("Entrez jusqu'a quel multiple:");
  //Initialisation de la variable pour stocker les résultats
  let output = "";
  // Boucle qui parcours les multiples
  for (let i = 1; i <= range; i++) {
    //Ajout de chaque résultat à la variable output
    output += `${i} x ${num} = ${i * num}<br>`;
  }
  //affichage des résultats dans l'élément HTML avec l'id "result"
  document.getElementById("result").innerHTML = output;
}
let x = prompt("Entrez un nombre pour afficher sa table de multiplication:");
displayMultiplicationTable(x);

// ----------------------------v-v-v-v-v-Anciens essais (plus bas)-v-v-v-v-v-----------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°1
// function displayMultiplicationTable() {
//     //Demande à l'utilisateur de saisir un nombre
//     let num = prompt("Entrez un nombre pour afficher sa table de multiplication:");
//     //Demande à l'utilisateur de saisir jusqu'à quel multiple
//     let range = prompt("Entrez jusqu'a quel multiple:");
//     //Initialisation de la variable pour stocker les résultats
//     let output = "";
//     // Boucle qui parcours les multiples
//     for (let i = 1; i <= range; i++) {
//       //Ajout de chaque résultat à la variable output
//       output += `${i} x ${num} = ${i * num}<br>`;
//     }
//     //affichage des résultats dans l'élément HTML avec l'id "result"
//     document.getElementById("result").innerHTML = output;
//   }
//   //Appel de la fonction pour lancer le script
//   displayMultiplicationTable();

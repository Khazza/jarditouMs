// --------------- EXERCICE 1 - CALCUL DU NOMBRE DE JEUNES, DE MOYENS ET DE VIEUX -----------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°2 (en fonction)
function calculAgeCategories() {
  // Initialisation des variables d'ages
  let under20 = 0;
  let between20and40 = 0;
  let over40 = 0;

  // Boucle infinie pour demander l'age
  while (true) {
    let age = parseInt(prompt("Entrez un âge (ou 100+ pour arrêter): "));

    // Si l'âge entré est 100 on break mais on prend l'age en compte
    if (age === 100) {
      over40++;
      break;
    }
    // Si l'âge est inférieur à 20, on incrémente la catégorie "moins de 20 ans"
    if (age < 20) {
      under20++;
    }
    // Sinon, si l'âge est inférieur ou égal à 40, on incrémente la catégorie "entre 20 et 40 ans"
    else if (age <= 40) {
      between20and40++;
    }
    // Sinon, on incrémente la catégorie "plus de 40 ans"
    else {
      over40++;
    }
  }

  // On retourne les résultats sous forme de trois variables
  return { under20, between20and40, over40 };
}
const result = calculAgeCategories();
document.write(
  `<p style="font-size: 20px;"> Il y a ${result.under20} personnes d'âge inférieur à 20 ans.</p><br>`
);
document.write(
  `<p style="font-size: 20px;"> Il y a ${result.between20and40} personnes d'âge compris entre 20 et 40 ans.</p><br>`
);
document.write(
  `<p style="font-size: 20px;"> Il y a ${result.over40} personnes d'âge supérieur à 40 ans.</p><br>`
);

// ----------------------------v-v-v-v-v-Anciens essais (plus bas)-v-v-v-v-v-----------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°1 (sans fonction)
// let under20 = 0; //initialiser le total de personne sous 20 ans à 0
// let between20and40 = 0; //initialiser le total de personne entre 20 et 40 ans à 0
// let over40 = 0; //initialiser le total de personne au dessus de 40 ans à 0

// while (true) {
//     let age = parseInt(prompt("Entrez un âge (ou 100+ pour arrêter): "));

//     if (age === 100 ) {
//         over40++;
//         break;
//     }
//     if (age < 20) {
//         under20++;
//     } else if (age <= 40) {
//         between20and40++;
//     } else {
//         over40++;
//     }
// }

// // console.log(`Il y a ${under20} personnes d'âge inférieur à 20 ans.`);
// // console.log(`Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.`);
// // console.log(`Il y a ${over40} personnes d'âge supérieur à 40 ans.`);
// // document.write(`Il y a ${under20} personnes d'âge inférieur à 20 ans.`);
// // document.write(`Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.`);
// // document.write(`Il y a ${over40} personnes d'âge supérieur à 40 ans.`);
// document.write(`<p style="font-size: 20px;"> Il y a ${under20} personnes d'âge inférieur à 20 ans.</p><br>`);
// document.write(`<p style="font-size: 20px;"> Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.</p><br>`);
// document.write(`<p style="font-size: 20px;"> Il y a ${over40} personnes d'âge supérieur à 40 ans.</p><br>`);

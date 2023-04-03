//--------------- EXERCICE 3 - RECHERCHE D'UN PRENOM ---------------
// -------------------------ESSAI N°5 (en fonction)
// Déclaration de la fonction supprimerPrenom
function supprimerPrenom() {
  // Déclaration du tableau de prénoms
  var tab = [
    "Audrey",
    "Aurélien",
    "Flavien",
    "Jérémy",
    "Laurent",
    "Melik",
    "Nouara",
    "Salem",
    "Samuel",
    "Stéphane",
  ];

  // Afficher le tableau initial sur la page
  document.getElementById("tableau-initial").innerHTML =
    "<h3>Tableau initial: </h3><ul>" +
    tab.map((prenom) => "<li>" + prenom + "</li>").join("") +
    "</ul>";

  // Boucle pour demander un prénom à supprimer
  while (true) {
    // Demander à l'utilisateur d'entrer un prénom
    var prenom = prompt(tab + "\nEntrez un prénom à supprimer :");

    // Si l'utilisateur appuie sur annuler (null) on sort de la boucle
    if (prenom == null) {
      break;
    }

    // Mettre tous les prénoms en minuscule
    prenom = prenom.toLowerCase();

    // Trouver la place du prénom dans le tableau en utilisant la fonction map pour mettre tous les prénoms en minuscule
    var index = tab
      .map(function (e) {
        return e.toLowerCase();
      })
      .indexOf(prenom);

    // Si le prénom n'a pas été trouvé
    if (index === -1) {
      alert("Ce prénom n'a pas été trouvé dans le tableau.");
    } else {
      // Boucle pour décaler les éléments du tableau
      for (let i = index; i < tab.length - 1; i++) {
        tab[i] = tab[i + 1];
      }
      // Supprimer le dernier élément ou mettre à blanc
      tab.pop();
      // Afficher le nouveau tableau sur la page
      document.getElementById("nouveau-tableau").innerHTML =
        "<h3>Nouveau tableau: </h3><ul>" +
        tab.map((prenom) => "<li>" + prenom + "</li>").join("") +
        "</ul>";
      break;
    }
  }
}
supprimerPrenom();

// ----------------------------v-v-v-v-v-Anciens essais (plus bas)-v-v-v-v-v-----------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°1
// let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// function supprimerPrenom() {
//   let name = prompt("Entrez un prénom à supprimer:");
//   let found = false;

//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i] === name) {
//       found = true;
//       for (let j = i; j < tab.length - 1; j++) {
//         tab[j] = tab[j + 1];
//       }
//       tab[tab.length - 1] = "";
//       break;
//     }
//   }

//   if (!found) {
//     window.alert("Le prénom n'a pas été trouvé dans le tableau.");
//   } else {
//     window.alert("Le prénom a été supprimé avec succès.");
//   }
// }

// supprimerPrenom();
// alert(tab);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°2
// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// console.log(tab);
// while (true) {
//   var prenom = prompt("Entrez un prénom à supprimer:");
//   var index = tab.indexOf(prenom);

//   if (index === -1) {
//     alert("Ce prénom n'a pas été trouvé dans le tableau.");
//   } else {
//     tab.splice(index, 1);
//     alert("Le prénom a été supprimé avec succès.");
//     break;
//   }
// }
// console.log(tab);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°3
// // Déclaration du tableau
// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// // Afficher le tableau initial sur la page
// document.getElementById("tableau-initial").innerHTML = "<h3>Tableau initial: </h3><ul>" + tab.map(prenom => "<li>" + prenom + "</li>").join("") + "</ul>";

// // Boucle pour demander un prénom à supprimer
// while (true) {
//     // Demander à l'utilisateur d'entrer un prénom
//     // var prenom = prompt("Audrey, Aurélien, Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel, Stéphane" + "\nEntrez un prénom à supprimer :");
//     var prenom = prompt(tab + "\nEntrez un prénom à supprimer :");
//     // Si l'utilisateur appuie sur annuler (null) on sort de la boucle
//     if(prenom == null){
//         break;
//     }
//     // Mettre tous les prénoms en minuscule
//     prenom = prenom.toLowerCase();
//     // Trouver la place du prénom dans le tableau en utilisant la fonction map pour mettre tous les prénoms en minuscule
//     var index = tab.map(function(e) { return e.toLowerCase(); }).indexOf(prenom);

//     // Si le prénom n'a pas été trouvé
//     if (index === -1) {
//         alert("Ce prénom n'a pas été trouvé dans le tableau.");
//     } else {
//         // Supprimer le prénom en utilisant splice
//         tab.splice(index, 1);
//         // Afficher le nouveau tableau sur la page
//         document.getElementById("nouveau-tableau").innerHTML = "<h3>Nouveau tableau: </h3><ul>" + tab.map(prenom => "<li>" + prenom + "</li>").join("") + "</ul>";
//         break;
//     }
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°4
// // Déclaration du tableau de prénoms
// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// // Afficher le tableau initial sur la page
// document.getElementById("tableau-initial").innerHTML = "<h3>Tableau initial: </h3><ul>" + tab.map(prenom => "<li>" + prenom + "</li>").join("") + "</ul>";

// // Boucle pour demander un prénom à supprimer
// while (true) {
//     // Demander à l'utilisateur d'entrer un prénom
//     var prenom = prompt(tab + "\nEntrez un prénom à supprimer :");

//     // Si l'utilisateur appuie sur annuler (null) on sort de la boucle
//     if(prenom == null){
//         break;
//     }

//     // // Normaliser la chaîne de caractères et supprimer les caractères accentués   -------(Marche pas)
//     // prenom = prenom.normalize("NFD").replace(/[\u0300-\u036f]/g, "");             -------(Marche pas)

//     // Mettre tous les prénoms en minuscule
//     prenom = prenom.toLowerCase();

//     // Trouver la place du prénom dans le tableau
//     var index = tab.map(function(e) { return e.toLowerCase(); }).indexOf(prenom);

//     // Si le prénom n'a pas été trouvé
//     if (index === -1) {
//         alert("Ce prénom n'a pas été trouvé dans le tableau.");
//     } else {
//         // Boucle pour décaler les éléments du tableau
//         for (let i = index; i < tab.length - 1; i++) {
//             tab[i] = tab[i + 1];
//         }
//         // Supprimer le dernier élément ou mettre à blanc
//         tab.pop();
//         // Afficher le nouveau tableau sur la page
//         document.getElementById("nouveau-tableau").innerHTML = "<h3>Nouveau tableau: </h3><ul>" + tab.map(prenom => "<li>" + prenom + "</li>").join("") + "</ul>";
//         break;
//     }
// }

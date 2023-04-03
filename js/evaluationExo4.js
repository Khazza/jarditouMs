//--------------- EXERCICE 4 - TOTAL D'UNE COMMANDE ---------------
// -------------------------ESSAI N°3 FONCTIONNEL ET PRIX ARRONDI A 0.01 (En fonction)-------
function calculerPrix(pu, qteCom) {
  // Calculer le total en multipliant le prix unitaire par la quantité commandée
  let tot = pu * qteCom;

  // Initialiser la remise à 0```
  let rem = 0;

  // Initialiser les frais de port à 0
  let port = 0;

  // Calculer la remise en fonction du total
  if (tot > 200) {
    rem = tot * 0.1;
  } else if (tot > 100) {
    rem = tot * 0.05;
  }

  // Calculer les frais de port en fonction du total remisé
  let totalRemise = tot - rem;
  if (totalRemise > 500) {
    port = 0;
  } else {
    port = totalRemise * 0.02;
    if (port < 6) {
      port = 6;
    }
  }

  // Calculer le prix à payer en ajoutant les frais de port au total remisé
  let pap = totalRemise + port;

  // Arrondir les prix à 0.01 près
  rem = Math.round(rem * 100) / 100;
  port = Math.round(port * 100) / 100;
  pap = Math.round(pap * 100) / 100;

  // Retourner les résultats sous forme d'un objet
  return {
    pu: pu,
    qteCom: qteCom,
    remise: rem,
    fraisPort: port,
    pap: pap,
  };
}

let prix = calculerPrix(
  prompt("Saisir le prix unitaire"),
  prompt("Saisir la quantité commandée")
);
document.write("Prix unitaire: " + prix.pu + "€" + "<br>");
document.write("Quantité commandée: " + prix.qteCom + "<br>");
document.write("Remise: " + prix.remise + "€" + "<br>");
document.write("Frais de port: " + prix.fraisPort + "€" + "<br>");
document.write("Prix à payer: " + prix.pap + "€" + "<br>");

// ----------------------------v-v-v-v-v-Anciens essais (plus bas)-v-v-v-v-v-----------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°1 PAS CONCLUANT MAIS FONCTIONNEL (N'arrondi pas)---------
// let PU = prompt("Saisir le prix unitaire");
// let QTECOM = prompt("Saisir la quantité commandée");
// let TOT = PU * QTECOM;
// let REM = 0;
// let PORT = 0;
// let PAP = 0;

// if (TOT >= 100 && TOT <= 200) {
//     REM = TOT * 0.05;
// } else if (TOT > 200) {
//     REM = TOT * 0.1;
// }

// TOT = TOT - REM;

// if (TOT > 500) {
//     PORT = 0;
// } else {
//     PORT = TOT * 0.02;
// }

// if (PORT < 6) {
//     PORT = 6;
// }

// PAP = TOT + PORT;
// console.log("Prix à payer : " + PAP + "€ (Remise : " + REM + "€, Port : " + PORT + "€)");

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°2 FONCTIONNEL ET PRIX ARRONDI A 0.01---------------------
// let PU = prompt("Saisir le prix unitaire");
// let QTECOM = prompt("Saisir la quantité commandée");

// let TOT = PU * QTECOM; // calculer le total
// let REM = 0; // initialiser la remise à 0
// let PORT = 0; // initialiser les frais de port à 0

// // calculer la remise en fonction du total
// if (TOT > 200) {
//   REM = TOT * 0.1;
// } else if (TOT > 100) {
//   REM = TOT * 0.05;
// }

// // calculer les frais de port en fonction du total remisé
// let totalRemise = TOT - REM;
// if (totalRemise > 500) {
//   PORT = 0;
// } else {
//   PORT = totalRemise * 0.02;
//   if (PORT < 6) {
//     PORT = 6;
//   }
// }

// let PAP = totalRemise + PORT; // calculer le prix à payer

// REM = Math.round(REM * 100) / 100;// arrondir le prix avec remise à 0.01 près
// PORT = Math.round(PORT * 100) / 100; // arrondir le prix frais de port à 0.01 près
// PAP = Math.round(PAP * 100) / 100;// arrondir le prix à payer à 0.01 près

// document.write("Prix unitaire: " + PU + "€" + "<br>"); // afficher le prix unitaire
// document.write("Quantité commandée: " + QTECOM + "<br>"); // afficher la quantité commandée
// document.write("Remise: " + REM + "€" + "<br>"); // afficher la remise
// document.write("Frais de port: " + PORT + "€" + "<br>"); // afficher les frais de port
// document.write("Prix à payer: " + PAP + "€" + "<br>"); // afficher le prix à payer

let ageEnfant, agePere, ageMere, ageGrandPere, ageOncle;
// Ecrivez votre code ici

// Ne pas modifier le code ci-dessous
module.exports = {
  ageEnfant,
  agePere,
  ageMere,
  ageGrandPere,
  ageOncle,
};
 ageEnfant = 10;


 agePere = ageEnfant * 2;

 ageMere = agePere - 5;


 ageGrandPere = (ageMere * 2) + (ageEnfant / 2);


ageOncle = agePere + 10;
console.log("Âge de l'enfant :", ageEnfant);
console.log("Âge du père :", agePere);
console.log("Âge de la mère :", ageMere);
console.log("Âge du grand-père :", ageGrandPere);
console.log("Âge de l'oncle :", ageOncle);
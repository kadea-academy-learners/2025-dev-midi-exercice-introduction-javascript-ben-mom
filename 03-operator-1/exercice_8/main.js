let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;
// Ecrivez votre code ici

// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
 salaireMensuel = 500; 

 loyer = salaireMensuel * 0.30;

 nourriture = salaireMensuel * 0.20;
 transport = salaireMensuel * 0.10;
 autresDepenses = 50;
autresDepenses += 25; 

 totalDepenses = loyer + nourriture + transport + autresDepenses;

 reste = salaireMensuel - totalDepenses;


console.log("Salaire mensuel :", salaireMensuel);
console.log("Loyer :", loyer);
console.log("Nourriture :", nourriture);
console.log("Transport :", transport);
console.log("Autres dépenses :", autresDepenses);
console.log("Total des dépenses :", totalDepenses);
console.log("Reste :", reste);

// PRIMO ESERCIZIO


// var firstMsg = prompt("Inserisci una parola..");
// var secondMsg = prompt("Inserisci una parola.."); 


// if(firstMsg.length==secondMsg.length){
//   console.log("le parole  sono lunghe uguali")
// }else if(firstMsg<secondMsg){
//   console.log("la piu piccola é " + firstMsg + " la piu grande é " + secondMsg)
// }else{
//   console.log("la piu piccola é " + secondMsg + " la piu grande é " + firstMsg)
// }


  // SECONDO ESERCIZIO

// var totale = 0;
// totale = totale *1;
// for(i=0 ; i<10; i++){
//   var num =prompt("inserisci numero");
//   num=num*1;
//   totale= (totale + num);
// }
// console.log(totale);


  // TERZO ESERCIZIO

  // var lista = [
  //   "ciccio",
  //   "pinko",
  //   "pallo"
  // ];
  // var nomeInserito = prompt("Inserisci il tuo nome...");
  // for(i=0; i<lista.length; i++){
    
    
  //   if(nomeInserito == lista[i]){
  //     console.log("Il tuo nome é sulla lista puoi entrare.")
  //     break
  //   }else if(nomeInserito!=lista[i]){
  //     console.log("Il tuo nome non é sulla lista non puoi entrare!")

  //   }

  // }


    // QUARTO ESERCIZIO
    
var arrayN=[];
for(i=0; i<6; i++){
  var nIns=parseInt(prompt("Inserisci un numero"));
  if(nIns%2){
    arrayN.push(nIns);
    console.log(arrayN)
  }
}


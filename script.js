
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
    
// var arrayN=[];
// for(i=0; i<6; i++){
//   var nIns=parseInt(prompt("Inserisci un numero"));
//   if(nIns%2){
//     arrayN.push(nIns);
//     console.log(arrayN)
//   }
// }


    // QUINTO ESERCIZIO


// var num_utente = prompt("Inserisci un numero...")
// var num_calcolato = 0;
// var somma = 0;
// var flag = false;

// for(var i = 1; i<=num_utente; i++){
//   num_calcolato = Math.pow(i, 3);
//   console.log("Il cubo calcolato di " + i + " é: "  + num_calcolato);
//   somma = somma + num_calcolato;
//   console.log("La somma é: "+somma);
 
// }



    // // SESTO ESERCIZIO
    // var i = 1;
    // var num_calcolato = 0;
    
    // while(num_calcolato<1000){
    //   console.log("La potenza calcolata di 2 elevato alla " + i + " é: "  + num_calcolato);   
    //   num_calcolato = Math.pow(2, i);
    //   i++;
    // }


    // SETTIMO ESERCIZIO
var n = prompt("Inserisci un numero di 4 cifre...");
var totale = 0;
var addendo = 0;
var i = 0;
  
for(i = 0; i < 4; i++){
  
  addendo = (Math.trunc(n/1000))/1;
  console.log("sono addendo" + addendo);

  totale = totale + addendo;
  console.log("somma ciclo  "  + totale);

  n = [(n - (addendo * 1000))*10];
  console.log("sono n : " + n);

}

console.log("La somma delle cifre del numero inserito é: " + totale);

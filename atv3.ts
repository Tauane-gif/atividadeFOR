//* 3- Faça um programa que dê entrada com 10 números armazene em um vetor, e verifique qual é o maior número e mostre no console.
//Nome: Tauane Souza 

let teclado = require (`prompt-sync`)(); 

let meuArray: number [] = []; 
let maior: number = 0; 

for (let cont = 0; cont <= 9 ; cont++) {
  meuArray[cont]=parseInt(teclado(`Digite o ${cont +1}º:`));

   }
for (let x = 0; x < 10; x++){

  if(meuArray[x] > maior ){
    maior = meuArray[x]; 
  }
}

console.log(maior); 

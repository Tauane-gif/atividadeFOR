
 console.clear();
 let teclado = require(`prompt-sync`)();
let n = parseInt(teclado(`Digite o valor de n:`))
let fatorial : number  = 1; 

for(let z = 1; z <= n; z++){
    fatorial *= z;  
}

console.log(fatorial); 

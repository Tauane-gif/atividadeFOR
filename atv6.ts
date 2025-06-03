let teclado = require(`prompt-sync`)();

for( let numero = 1000; numero <= 2000; numero++){
    if (numero % 11 === 2 )   {
        console.log(numero)
    }
}
function suma(a, b) {
    console.log(arguments); // Imprime los argumentos que se le pasan a la funcion, esta no es recomendable usarla
    return a + b;
}

let resultado = suma(5,6); // El valor que se le pasa a la funcion se le conoce como argumento

console.log(resultado);
console.log(typeof suma); // Imprime el tipo de dato de la funcion
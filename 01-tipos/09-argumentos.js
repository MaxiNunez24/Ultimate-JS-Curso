function suma(a, b) { // Los valores que recibe una función se llaman Parámetros
    console.log(arguments); // Imprime los argumentos que se le pasan a la funcion, esta no es recomendable usarla
    return a + b;
}

let resultado = suma(5,6); // Los valores que se le pasan a una función se llaman Argumentos

console.log(resultado);
console.log(typeof suma); // Imprime el tipo de dato de la funcion -> function

/**
 * 
 * Crear un algoritmo que genere
 * un array de longitud n y que sus elementos
 * sean números de 1 hasta n
 * 
 */

let longitud = 7;

function generarArray(n){
    let arr = [];
    if (n <= 0){
        return [];
    }
    for (let i = 0; i < n; i++){
        arr[i]=i++;
    }
    return arr;
}

let resultado = generarArray(longitud);
console.log(resultado); // [1, 2, 3, 4, 5, 6, 7]
/**
 * Crear un algoritmo que devuelva
 * la cantidad de números posutivos
 * de un array
 */

let arr = [2, 5, 7, 15, -5, -100, 55];

function cantPositivos(arr){
    let cant=0;
    for (num of arr){
        cant = num > 0 ? cant + 1 : cant;
    }
    return cant;
}

let resultado = cantPositivos(arr);
console.log(resultado); // 5
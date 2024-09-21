/**
 * Crear algoritmo que devuelva el elemento
 * menor y mayor de un array
 */

let arr = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (num of arr) {
        menor = menor < num ? menor : num;
        mayor = mayor > num ? mayor : num;
    }    

    return [menor, mayor];
};

let resultado = getMenorMayor(arr);
console.log(resultado); // [-100, 55]
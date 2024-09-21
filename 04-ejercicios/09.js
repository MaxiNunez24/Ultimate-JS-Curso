/**
 * 
 * Crear un algoritmo que reciba un
 * arregle de pares y devuelva 
 * un array de objetos
 * 
 */

let arr = [[1, {nombre: 'juan', edad: 15}], [2, {nombre: 'ana', edad: 25}], [3, {nombre: 'pepe', edad: 30}]];

function objetos(arr){
    let obj = [];
    let idx = 0;
    for (par of arr){
        arr[idx][1].id=arr[idx][0];
        obj[idx]=arr[idx][1];
        idx++;
    }
    return obj;
}

let resultado = objetos(arr);
console.log(resultado); // [{nombre: 'juan', edad: 15}, {nombre: 'ana', edad: 25}, {nombre: 'pepe', edad: 30}]
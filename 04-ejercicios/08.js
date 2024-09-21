/**
 * 
 * Crear un algoritmo que tome un
 * array de objetos y devuelva
 * un array de pares
 * 
 */

let arr = [{nombre: 'juan', edad: 15}, {nombre: 'ana', edad: 25}, {nombre: 'pepe', edad: 30}];

function pares(arr){
    let par = [];
    let i = 0;
    for (obj of arr){
        par[i]=[i+1,obj];
        i++;
    }
    return par;
}

let resultado = pares(arr);
console.log(resultado); // [[1, {nombre: 'juan', edad: 15}], [2, {nombre: 'ana', edad: 25}], [3, {nombre
/**
 * Indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */

function getbyIdx(arr, idx) {
   return (idx < 0 || idx >= arr.length) ? 'Indice no valido' : arr[idx];
    
}

let resultado = getbyIdx([1, 2], 2);
console.log(resultado); // 2
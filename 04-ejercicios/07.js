/**
 * 
 * Crear algoritmo que devuelva
 * la cantidad + impuestos 
 * del costo de un producto
 * 
 */

function costoTotal(costo, impuesto){
    return costo + (costo * impuesto);
}

let resultado = costoTotal(19.9, 0.15);
console.log(resultado); // 116
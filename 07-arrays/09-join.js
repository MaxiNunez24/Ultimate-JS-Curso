let arr1 = ['Nico', 'Mica', 'Vale'];
let mensaje = arr1.join(', ');
console.log(mensaje); // Nico, Mica, Vale  // convierte el array en un string


let saludo = "Hola mundo! desde NZ";
let arr2 = saludo.split(' ');
console.log(arr2); // [ 'Hola', 'mundo!', 'desde', 'NZ' ]  // separa el string en un array
console.log(arr2.join('-')); // Hola-mundo!-desde-NZ  // convierte el array en un string separado por un guion
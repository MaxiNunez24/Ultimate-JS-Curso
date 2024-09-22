const letras = ['a','b'];

// Agregar un elemento al final del array
letras.push('c','d');

// Agregar un elemento al inicio del array
letras.unshift('y','z');

// Agregar un elemento en una posición específica

letras.splice(3, 0, 'x');

console.log(letras); // ['a','b','c']
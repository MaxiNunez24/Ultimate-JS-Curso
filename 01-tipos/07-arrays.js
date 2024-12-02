let animales = ['Chanchito','Caballo']; // Array

console.log(animales);  // Imprime el array completo

console.log(animales[0]); // Imprime el primer valor del array

animales[2]='dragon'; // Agrega un valor al array

console.log(animales); // Imprime el array completo


animales[10]='pez'; // Agrega un valor al array -> Completa los campos del Array con undefined hasta llegar al nuevo índice

console.log(animales); // Imprime el array completo

console.log(animales[8]); // Imprime undefined

console.log(typeof animales); // Object

console.log(animales.length); // 11

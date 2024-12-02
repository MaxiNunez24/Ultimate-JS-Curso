// Personaje de TV
let nombre = 'Homero Simpson';
let programa = 'Los Simpson';
let edad = 40;
// Objeto Literal -> {}
let personaje = {
    nombre: 'Homero Simpson', // A esto se le conoce como par llave-valor -> key-value
    programa: 'Los Simpson',
    edad: 40,
};  // Objeto Literal 

console.log(personaje); // Imprime el objeto completo

console.log(personaje.nombre); // Imprime el valor de la llave nombre

console.log(personaje['programa']); // Imprime el valor de la llave programa

personaje.edad = 45; // Cambia el valor de la llave edad
personaje['edad'] = 50; // Cambia el valor de la llave edad

delete personaje.programa; // Elimina la llave anime
console.log(personaje); // Imprime el objeto completo

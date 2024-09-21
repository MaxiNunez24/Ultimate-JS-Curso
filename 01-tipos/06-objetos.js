// Personaje de TV
let nombre = 'Homero Simpson';
let anime = 'Los Simpson';
let edad = 40;

let personaje = {
    nombre: 'Homero Simpson', // A esto se le conoce como par llave-valor
    anime: 'Los Simpson',
    edad: 40,
};  // Objeto

console.log(personaje); // Imprime el objeto completo

console.log(personaje.nombre); // Imprime el valor de la llave nombre

console.log(personaje['anime']); // Imprime el valor de la llave anime

personaje.edad = 45; // Cambia el valor de la llave edad
personaje['edad'] = 50; // Cambia el valor de la llave edad

delete personaje.anime; // Elimina la llave anime
console.log(personaje); // Imprime el objeto completo
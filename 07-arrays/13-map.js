const usuarios = [
    {edad: 15, nombre: 'Juan'},
    {edad: 52, nombre: 'Pablo'},
    {edad: 10, nombre: 'Javier'},
    {edad: 32, nombre: 'María'},
];


const lista = usuarios
    .filter(usuario => usuario.edad > 17)
    .map(usuario => `<li>${usuario.nombre}</li>`);

const html = `<ol>${lista.join('')}</ol>`;

console.log(html); // <ol><li>Pablo</li><li>María</li></ol>  // filtra los elementos de un array según una condición dada y crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos


// console.log(lista); // [ 'Juan', 'Pablo', 'Javier', 'María' ]  // crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

// const mapped = usuarios.map(usuario => {
//     return {
//         ...usuario,
//         mayor: usuario.edad > 17
//         }

// });

// console.log(mapped); // [ { edad: 15, nombre: 'Juan', mayor: false }, { edad: 52, nombre: 'Pablo', mayor: true }, { edad: 10, nombre: 'Javier', mayor: false }, { edad: 32, nombre: 'María', mayor: true } ]  // crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
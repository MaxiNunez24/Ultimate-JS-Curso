let usuarios = [
    {edad: 15, nombre: 'Juan'},
    {edad: 25, nombre: 'Pablo'},
    {edad: 13, nombre: 'Javier'},
    {edad: 40, nombre: 'María'},

];

const mayores = usuarios.filter(usuario => usuario.edad > 17);
console.log(mayores); // [ { edad: 25, nombre: 'Pablo' } ]  // filtra los elementos de un array según una condición dada


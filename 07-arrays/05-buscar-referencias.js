const usuarios = [
    {id: 1, nombre: 'Miguel'},
    {id: 2, nombre: 'Chanchito feliz'},

];

// const resultado = usuarios.indexOf({id: 1, nombre: 'Miguel'});

const resultado = usuarios.find(function(usuario) {
    return usuario.id === 1;
});

const resultado2 = usuarios.find(usuario =>
    usuario.id === 1);

console.log(resultado); // { id: 1, nombre: 'Miguel' }
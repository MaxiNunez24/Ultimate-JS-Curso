// let user = {
//     id: 1,
//     email: 'Jorge@holamundo.io',
//     name: 'Jorge',
//     activo: true,
//     recuperarClave: function(){
//         console.log('Recuperando clave');
//     },
// };


function crearUsuario(email, name) {
    return {
        email, // si una propiedad tiene el mismo nombre que la variable que la inicializa, se puede omitir
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave');
        },
    };
}

user1 = crearUsuario('Jorge', 'Jorge@holamundo.io'); // una factory es una función que retorna un objeto
user2 = crearUsuario('Ana', 'Ana@holamundo.io');

console.log(user1);
console.log(user2);
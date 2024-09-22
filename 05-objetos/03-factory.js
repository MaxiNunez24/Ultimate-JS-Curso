// let user = {
//     id: 1,
//     email: 'Jorge@holamundo.io',
//     name: 'Jorge',
//     activo: true,
//     recuperarClave: function(){
//         console.log('Recuperando clave');
//     },
// };


function crearUsuario( email, name) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave');
        },
    };
}

user1 = crearUsuario('Jorge', 'Jorge@holamundo.io');
user2 = crearUsuario('Ana', 'Ana@holamundo.io');

console.log(user1);
console.log(user2);
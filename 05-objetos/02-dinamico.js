// Al declarar un objeto con la palabra reservada const, podemos modificar sus propiedades,
// pero no podemos asignarle un nuevo valor ej: otro objeto.

const user = { id: 1 };

// Podemos modificar sus propiedades, agregar nuevas propiedades y eliminar propiedades
user.name = 'Jorge';
user.guardar = function () {
    console.log('Guardando usuario', user.name);
}

user.guardar(); // Guardando usuario Jorge


delete user.name;
delete user.guardar;

console.log(user); // { id: 1 }

// Si queremos evitar que se modifiquen y/o agregar propiedades de un objeto
// utilizamos Object.freeze
const user1 = Object.freeze({ id: 1 }); // { id: 1 }

// Pero si quieres fijar las propiedades de un objeto, pero permitir modificarlas
// utilizamos Object.seal
const user2 = Object.seal({ id: 1 }); // { id: 1 }
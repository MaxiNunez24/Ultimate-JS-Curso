function createUsuario(nombre){
    return {
        nombre: nombre,
        id: Math.random()
    }
}

const usuario = createUsuario('Juan');
const usuario2 = createUsuario('Pepe');

console.log(usuario, usuario2); // Juan, Pepe
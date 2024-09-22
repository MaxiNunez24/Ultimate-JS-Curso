function Usuario(name) {
    this.id = Math.random();
    this.name = name;
}

const usuario = new Usuario('Juan');
const usuario2 = new Usuario('Pepe');

console.log(usuario, usuario2); // Juan, Pepe
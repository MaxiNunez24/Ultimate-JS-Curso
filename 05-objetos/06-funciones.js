function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name); // Usuario -> Nombre de la función
console.log(Usuario.length); // 1 -> Cantidad de argumentos que recibe la función

const U = Usuario; // Alias 
const user = new U('Jorge');

console.log(user); // Usuario { nombre: 'Jorge' }   

function of(Fn, arg) { // Fn es una función y arg es un argumento
    return new Fn(arg); // Retorna una nueva instancia de la función Fn con el argumento arg
}

let user1 = of(Usuario, 'Jorge');
console.log(user1); // Usuario { nombre: 'Jorge' }


function returned() {
    return function () {
        console.log('Hola');
    };
}

let saludo = returned(); // Retorna una función que imprime 'Hola'
saludo(); // Hola
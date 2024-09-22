function Usuario(nombre) {
  this.nombre = nombre;
}

console.log(Usuario.name); // Usuario
console.log(Usuario.length); // 1

const U = Usuario;
const user = new U('Jorge');

console.log(user); // Usuario { nombre: 'Jorge' }   

function of(Fn,arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Jorge');
console.log(user1); // Usuario { nombre: 'Jorge' }


function returned(){
    return function(){
        console.log('Hola');
    };
}

let saludo = returned();
saludo(); // Hola
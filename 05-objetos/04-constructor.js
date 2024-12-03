// {ID: 1, recuperarClave: function(){}}
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () {
        console.log('Recuperando clave');
    };
}

let usuario = new Usuario(); // Un constructor es un método que se invoca con el operador new e instancia un objeto
// new crea un objeto vacío y lo asigna a this dentro de la función constructora

console.log(usuario); // {ID: 1, recuperarClave: function(){}}

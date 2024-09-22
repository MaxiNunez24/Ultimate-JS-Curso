// El siguiente código es un ejemplo de cómo se puede hacer un objeto con propiedades privadas y públicas.

// Primero vemos como el objeto se puede modificar sin problemas
function Usuario(){
    this.name = 'Jorge';
    
    this.log = function(){
        console.log('logging...');
    };
    this.guaradar = function(){
        console.log('guardando...');
    };
}

const usuario = new Usuario();
usuario.log= function(){
    console.log('lalala');
}

// LO QUE PODEMOS HACER PARA NO PODER MODIFICAR ES DECLARAR LAS PROPIEDADES COMO VARIABLES
// ESTAS VARIABLES NO SE PUEDEN MODIFICAR DESDE FUERA DE LA FUNCIÓN

function Usuario(){
    this.name = 'Jorge';
    let log = function(){
        console.log('logging...');
    };

    
    this.guaradar = function(){
        log();
        console.log('guardando...');
    };
}
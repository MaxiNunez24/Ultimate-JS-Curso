let email = 'Jorge@holamundo.io';
let name = 'Jorge';
let direccion = {
    calle: 'Av. Siempre viva',
    numero: 123,
};


let user = {
    email: 'Jorge@holamundo.io',
    name: 'Jorge',
    direccion: {
        calle: 'Av. Siempre viva',
        numero: 123,
    },
    activo: true,
    recuperarClave: function () {  // Las funciones en un objeto se llaman métodos
        console.log('Recuperando clave');
    },
};


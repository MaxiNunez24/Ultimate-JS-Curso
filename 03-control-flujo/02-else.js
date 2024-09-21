// if (condicion){   si las operaciones dentro del if son de una sola línea, se pueden omitir las llaves
//
//     expresion
// }

let edad = 15;

if (edad > 17) {
    console.log('Usuario mayor de edad');
}
else if (edad > 13) {
    console.log('Usuario necesita estar acompañado de un adulto');
}
else {
    console.log('Usuario menor de edad');
}
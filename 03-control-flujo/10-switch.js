let accion = 'listar';

switch (accion) {
    case 'listar': // Cuando la variable accion tenga el valor 'listar' -> 
        console.log('Accion de listar'); // va a ejecutar el código hasta 
        break; // el primer break que encuentre -> Es fundamental usarlos (aunque es opcional)
    case 'guardar':
        console.log('Accion de guardar');
        break;
    case 'actualizar':
        console.log('Actualizar usuario');
        break;
    case 'eliminar':
        console.log('Eliminar usuario');
        break;
    default: // cuando la variable no tenga ninguno de los valores anteriores ->
        console.log('Accion no soportada');
        break;
}

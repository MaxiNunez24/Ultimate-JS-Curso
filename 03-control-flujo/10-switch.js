let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
        break;
    case 'guardar':
        console.log('Accion de guardar');
        break;
    case 'actualizar':
        console.log('Actualizar usuario');
        break;
    case 'eliminar':
        console.log('Eliminar usuario');
        break;
    default:
        console.log('Accion no soportada');
        break;
}
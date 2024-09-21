// short-circuit

// Falso (falsy)
// false
// 0
// null
// NaN
// undefined
// ''

let nombre = '';
let username = nombre || 'Invitado'; // Si nombre es falso, asigna 'Invitado' a username


function fn1() {
    console.log('Soy fn1');
    return true;
}

function fn2() {
    console.log('Soy fn2');
    return true;
}

let x = fn1() && fn2(); // Si fn1 es verdadero, ejecuta fn2

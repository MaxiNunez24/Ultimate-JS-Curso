const ahora = new Date();

console.log(ahora); // 2021-09-29T20:00:00.000Z

const fecha = new Date('December 17, 1995 14:24:00 GMT+1300');

console.log(fecha); // 1995-12-17T17:24:00.000Z 


const fecha2 = new Date(1995, 11, 17, 14, 24);

console.log(fecha2); // 1995-12-17T20:24:00.000Z

const fecha3 = new Date(1995, 11, 17, 14+15, 24);

console.log(fecha3); // 1995-12-17T21:24:00.000Z

// FECHA EN FORMATO MAS CORTO, MAS AMIGABLE
console.log('datestring', fecha3.toDateString()); // 'Sun Dec 17 1995'
// PARA MANDAR LA FECHA DE CLIENTE A SERVIDOR - SERVIDOR A CLIENTE
console.log('ISOstring', fecha3.toISOString()); 
// PARA VER HORAS, MINUTOS Y SEGUNDOS
console.log('timestring', fecha3.toTimeString()); 

// OBTENER EL AÑO, MES, DIA, HORA, MINUTO, SEGUNDO
// fecha3.get

// MODIFICAR EL AÑO, MES, DIA, HORA, MINUTO, SEGUNDO
// fecha3.set
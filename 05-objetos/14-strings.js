const saludo = "Hola Mundo!";

const despedida = new String("Adios Mundo :(");
console.log(saludo); // Hola Mundo!
console.log(despedida); // [String: 'Adios Mundo :(']

console.log(saludo.length); // 11
console.log(saludo.indexOf('Mu')); // 5
console.log(saludo.indexOf('dsfs')); // -1
console.log(saludo.includes('Mu')); // true
// REMPLAZAR TEXTO
console.log(saludo.replace('Mundo', 'Jorge')); // Hola Jorge!

console.log(saludo.toLowerCase()); // hola mundo!
console.log(saludo.toUpperCase()); // HOLA MUNDO!

// SUBSTRING
console.log(saludo.substring(0, 4)); // Hola

const espacios = "    Hola     Mundo!    ";
console.log(espacios.trim()); // Hola    Mundo!
console.log(espacios.trimStart()); // Hola     Mundo!
console.log(espacios.trimEnd()); //     Hola     Mundo!

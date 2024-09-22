console.log(
    Math.PI, // 3.141592653589793 (valor de PI)
    Math.abs(-10), // 10 (valor absoluto)
    Math.round(3.5), // 4 (redondea al entero más cercano hacia arriba si es >= 0.5)
    Math.floor(3.9), // 3 (redondea al entero más cercano hacia abajo)
    Math.ceil(3.1), // 4 (redondea al entero más cercano hacia arriba)
    Math.pow(2, 3), // 8 (2 elevado a la 3)
    Math.sqrt(9), // 3 (raíz cuadrada de 9)
);

console.log(Math.random()); // número aleatorio entre 0 y 1

function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

const letras = ['a','b', 1, 'c','d', 1];

console.log(letras.indexOf('c')); // 2
console.log(letras.indexOf(1)); // 2
console.log(letras.lastIndexOf(1)); // 5

console.log(letras.includes('x')); // false


console.log(letras.indexOf(1,3)); // 5
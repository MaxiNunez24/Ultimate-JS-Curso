// while
// do-while
// for

//Cuando se tiene un arreglo, se puede recorrer con un ciclo for of

let animales = ['perro', 'gato', 'pez', 'loro'];

for (let animal of animales) {
    console.log(animal);
}

// También se puede recorrer con un while
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}
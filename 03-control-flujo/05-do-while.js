// Cuales son numeros pares

let i = 0;

//Comparar con el ciclo while
while (i < 4) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}


do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i < 4);
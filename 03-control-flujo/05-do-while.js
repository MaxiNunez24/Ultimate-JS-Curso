// Cuales son numeros pares

let i = 0;

//Comparar con el ciclo while
while (i < 4) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// La diferencia principal es que primero se ejecuta el código y después se evalúa la condición
do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i < 4);

// While -> Se ejecuta 0 o N veces
// Do While -> Se ejecuta 1 o N veces

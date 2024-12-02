let i = 0;

while (i < 6) {
    i++;
    if (i === 2) {
        continue; // Se salta a la siguiente iteración del bucle
    }
    if (i === 4) {
        break; // Se corta por completo el bucle
    }
    console.log(i);
}

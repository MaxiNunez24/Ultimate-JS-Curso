// const numeros = [1,2,3,4];

// const suma = numeros.reduce((acc,el)=> acc + el, 0);

// console.log(suma); // 10



// const anidado = [1, 2, 3, [4, 5]];

// const plano = anidado.reduce((acc, el) => acc.concat(el), []);
// console.log(plano); // [1,2,3,4,5]  // Se puede ver que se aplanó el array anidado


const usuarios = [
    {nombre: 'Juan', edad: 15},
    {nombre: 'Pablo', edad: 25},
    {nombre: 'Javier', edad: 13},
];

const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});

console.log(indexado); // { Juan: { nombre: 'Juan', edad: 15 }, Pablo: { nombre: 'Pablo', edad: 25 }, Javier: { nombre: 'Javier', edad: 13 } }  // Se puede ver que se indexó el array de objetos por el nombre de cada objeto
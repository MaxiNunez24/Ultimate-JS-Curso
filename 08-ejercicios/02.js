const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id: 13},
    ['lala'],
]

function dividePorTipo(arr) {
    return {
        strings: arr.filter(e => typeof e === 'string'),
        numbers: arr.filter(e => typeof e === 'number'),
        objects: arr.filter(e => typeof e === 'object'),
    }
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray); // [['Hola', 'Mundo'], [12], [{}, {id: 13}, ['lala']]]

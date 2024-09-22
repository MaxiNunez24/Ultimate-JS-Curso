let obj1 = {id: 1, name: 'Juan'};

function crearCopia(obj){
    let copia = {};

    for (let key in obj) {
        copia[key] = obj[key];
    }

    return copia;

}

let obj2 = crearCopia(obj1);

console.log(obj1, obj2); // {id: 1, name: 'Juan'}, {id: 1, name: 'Juan'}
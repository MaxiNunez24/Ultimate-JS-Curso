let objeto = { name: 'Juan' };

function agregarId(obj) {
    if (typeof obj === 'object') {
        obj.id = Math.random();
    }
    return obj;
}

agregarId(objeto);
console.log(objeto); // {name: 'Juan', id: 0.123456789}
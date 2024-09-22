let punto = {
    x: 10,
    y: 20,
};


let clonePunto = Object.assign({}, punto,{ z: 20, x: 100 });

console.log(punto, clonePunto); // { x: 10, y: 20 } { x: 100, y: 20, z: 20 }


let copiaPunto = Object.assign({}, punto);
console.log(punto, copiaPunto); // { x: 10, y: 20 } { x: 10, y: 20 }

let copia3 = {...punto};
console.log(copia3); // { x: 10, y: 20 }

let copia4 = {};
for (let llave in punto) {
    copia4[llave] = punto[llave];
}
function paraAbsoluto(arr){ 
    return arr.map(n => Math.abs(n));
}

const ns = [-2, 3, 5, -15, 3, -32, -324];

const absolutos = paraAbsoluto(ns);

console.log(absolutos); // [2, 3, 5, 15]
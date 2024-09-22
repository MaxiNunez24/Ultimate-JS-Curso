// let numeros = [15, 10, -3];

// numeros.sort();
// numeros.reverse();
// 
// console.log(numeros); // [15, 10, -3]  // ordena los elementos de un array de manera ascendente y luego los invierte    

// let letras = [ 'z','a','d'];

// letras.sort();
// console.log(letras); // [ 'a', 'd', 'z' ]  // ordena los elementos de un array de manera ascendente

let conMayusculas = ['Z','a','d'];

conMayusculas.sort((a,b)=>{
    /**
     * a antes que b => -1
     * a después que b => 1
     * a igual a b => 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if(alower < blower){
        return -1;
    }
    if(alower > blower){
        return 1;
    }
    return 0;

});
console.log(conMayusculas); // [ 'Z', 'a', 'd' ]  // ordena los elementos de un array de manera ascendente


let usuarios = [
    {edad: 15, nombre: 'Juan'},
    {edad: 25, nombre: 'Pablo'},
    {edad: 13, nombre: 'Javier'},

];

usuarios.sort((a,b)=>{
    if(a.edad < b.edad) return -1;
    if(a.edad > b.edad) return 1;
    return 0;
}
);

console.log(usuarios); // [ { edad: 13, nombre: 'Javier' }, { edad: 15, nombre: 'Juan' }, { edad: 25, nombre: 'Pablo' } ]  // ordena los elementos de un array de manera ascendente 
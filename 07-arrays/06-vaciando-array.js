// let arr = [1,2];
// arr = [];

// let arr = [1,2];
// let arr2 = arr;
// arr = [];
// console.log(arr2, arr); // [1,2] []


//   ESTA ES UNA FORMA COMUN DE VACIAR UN ARRAY
// let arr = [1,2];
// arr.length = 0;
// console.log(arr); // []


//  NO ES BONITA PERO ES LA MAS ESPLICITA
// let arr = [1,2];
// arr.splice(0, arr.length);
// console.log(arr); // []


// OPCION NO RECOMENDADA
let arr = [1,2];
while(arr.length > 0) {
    arr.pop();
}
let arr1 = [1,2];
let arr2 = [3,4];

let combinado = arr1.concat(arr2);
// console.log(combinado); // [1,2,3,4]

// let dividido = combinado.slice(1,3);
// console.log(dividido); // [2,3]

// let dividido = combinado.slice(1);
// console.log(dividido); // [2,3,4]

let dividido = combinado.slice();
console.log(dividido); // [1,2,3,4]  Viene siendo una copia del array combinado
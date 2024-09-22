let arr1 = [1,2];
let arr2 = [5,6];


let arr3 = [...arr1, 3, 4, ...arr2];

let arr4 = [...arr3];
arr3.pop();

console.log(arr3,arr4); 
// [1,2,3,4,5,6] [1,2,3,4,5,6]  // arr4 no se ve afectado por el cambio en arr3 
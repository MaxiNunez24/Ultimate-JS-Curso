let obj = {};

let obj2 = new Object();


function Usuario(){
    this.name = 'Jorge';

}

let user = new Usuario();
console.log(user.constructor); // [Function: Usuario]

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s2.valueOf()); // 1 + 1
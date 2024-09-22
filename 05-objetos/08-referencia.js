// let a = 1;
// let b = a;

// b++;

// console.log(a,b); // 1 2

// let c = {}
// let d = c;

// d.prop=1;
// console.log(c,d); // { prop: 1 } { prop: 1 }

let a = {prop: 1};

function suma(n){
    n.prop++;
}

suma(a);
console.log(a); // 1

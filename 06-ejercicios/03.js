function similares(obj1, obj2) {
    let distintos = false;

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            distintos = true;
        }
    }

    return !distintos;
}

let resultado=similares({a: 3, b: 2}, {a: 1, b: 2});
console.log(resultado); // true
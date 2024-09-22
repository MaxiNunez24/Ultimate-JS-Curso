let objeto = {
    id:1,
    name:'Juan',
    login: function(){},
    logout: function(){},
}

function cualesMetodos(obj){
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(key);
        }
    }
}

cualesMetodos(objeto); // login, logout
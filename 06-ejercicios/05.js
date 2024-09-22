let objeto = {
    id:1,
    name:'joaquin',
    login: function(){},
    logout: function(){},
}

let propiedad = 'login';


function tieneProp(obj, propiedad){
    let props = Object.keys(obj);

    for ( let prop of props){
        if (prop == propiedad){
            return true;
        }
    }
    return false;

}

console.log(tieneProp(objeto, propiedad)); // login, logout
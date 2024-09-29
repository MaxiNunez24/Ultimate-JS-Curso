const usuarios = [
    {edad: 11, nombre: 'Pedro', plan: 'premium'},
    {edad: 25, nombre: 'Pablo', plan: 'free'},
    {edad: 30, nombre: 'María', plan: 'gold'},
    {edad: 15, nombre: 'Esther', plan: 'free'},
    {edad: 12, nombre: 'Isabel', plan: 'premium'},
];

function cuantosPremium(usrs) {
     let c=0; 
    for (n of usrs){
        if(n.plan !== 'free'){
            c++;    
        }
    }
    return c;
}

function cuantosMayores(usrs) {
    let c=0; 
    for (n of usrs){
        if(n.edad >= 18){
            c++;    
        }
    }
    return c;
}

console.log(cuantosPremium(usuarios));

console.log(cuantosMayores(usuarios));
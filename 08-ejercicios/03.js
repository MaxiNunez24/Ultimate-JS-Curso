const usuarios = [
    {edad: 20, nombre: 'Pedro', plan: 'premium'},
    {edad: 25, nombre: 'Pablo', plan: 'free'},
    {edad: 30, nombre: 'María', plan: 'gold'},
    {edad: 35, nombre: 'Esther', plan: 'free'},
    {edad: 40, nombre: 'Isabel', plan: 'premium'},
];

function getPaidUsers(usrs) {

    return usrs.filter(usuario =>
        usuario.plan !== 'free');   
}

console.log(getPaidUsers(usuarios)); // { edad: 20, nombre: 'Pedro', plan: 'premium' }

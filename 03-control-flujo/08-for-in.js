let user = {
    id: 1,
    name: 'John',
    age: 25,
};

for (let prop in user) { // Asigna a prop cada una de las llaves/propiedades del objeto user
    console.log(prop, user[prop]);
}

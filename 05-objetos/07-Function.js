function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log('dibujando en las coordenadas');
    }
}

let punto = {z: 7};
Punto.call(punto, 1, 2);
console.log(punto); // {z: 7, x: 1, y: 2, dibujar: [Function]}


//    EL CODIGO DE ABAJO NO ES RECOMENDADO, ES MAS NUNCA DEBERIA USARSE

// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function(){
//         console.log('dibujando en las coordenadas');
//     }
// `);

// const p = new Point(1, 2);
// console.log(p); // Point { x: 1, y: 2, dibujar: [Function] }
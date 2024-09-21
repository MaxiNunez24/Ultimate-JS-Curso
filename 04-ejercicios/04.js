/** 
 * Ejercicio 04
 * Calculamos los numeros impares del 1 al 10
*/

function numImpares(){
    for(let i = 1; i <= 10; i++){
        if(i % 2 !== 0){
            console.log('Numero impar: ',i);
        }
    }
}

numImpares(); // 1, 3, 5, 7, 9
/**
 * Funciones flecha (Arrow function)
 *! IMPORTANTE
 *todo: Return implicito 
 *todo: Quiere decir que si tu función se puede escribir en una sola línea sin necesidad de llaves, no es necesario poner la palabra "return" 
 *! La expresión a la que apunte la flecha será retornada 
 * 
 * Expresión lambda
 * 
 * 
 * 
 */

const addTwoNumbers = (a, b) => a + b;
let result = addTwoNumbers(3, 4);
console.log(`El resultado de sumar 3 + 4 es ${result}`);

const evenOrOdd = (limit) => {
    let total = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log("es par");
        } else {
            console.log("es impar");
        }
        total += i;
    }
    return total;
}
console.log(evenOrOdd(100));
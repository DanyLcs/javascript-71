/**
 *! For (loop)
 ** Es una estructura de control rpetitiva 
 ** El bloque de código dentro de ella se va a repetir n veces 
 *? El bucle for cuenta con 3 partes dentro de los paréntesis: 
 *? 1. Una variable que va a actuar como contador, común es que se llame i  
 *? 2. Es la condición de ejecución, esto quiere decir la condición que mientras sea verdadera, el bucle se va a ejecutar
 *? 3. El incremento del contador
 * 
 **Nota:  
 ** Se suele usar mucho para recorrer arrays 
 ** Método para saber el tamaño de un array
 *todo: nombreArray.length 
 * 
 *!for (inicio; condición; incremento) {
 *! // código que se repite 
 *! }
 * 
 * 
 */

const numeros = [
  12, 45, 7, 89, 23, 56, 34, 78, 91, 10,
  67, 32, 4, 76, 54, 21, 98, 43, 65, 11,
  87, 29, 50, 73, 16, 94, 38, 61, 8, 82,
  27, 69, 14, 95, 41, 58, 3, 77, 36, 84,
  19, 63, 47, 90, 25, 71, 6, 53, 80, 31,
  99, 42, 17, 68, 35, 86, 22, 74, 9, 57,
  93, 40, 15, 62, 28, 81, 5, 70, 48, 96,
  24, 59, 33, 88, 13, 66, 44, 79, 2, 55,
  97, 30, 18, 72, 46, 85, 20, 64, 39, 92,
  1, 52, 26, 75, 49, 83, 37, 60, 51, 100
];

console.log(`El tamaño del array es ${numeros.length}`);
for (let i = 0; i < numeros.length; i++) {
    console.log(`El número en la posición ${i} es ${numeros[i]}`);
}

let total = 0;
for (let c = 0; c < numeros.length; c++) {
    // sintaxis tradicional
    total = total + numeros[c];
    console.log(`El valor actual del acumulado es ${total}`);
    /** sintaxis abreviada
     * total += numeros[c];
     */
}
console.log(`La suma de los 100 elementos del array es ${total}`);

/**
 ** Ejercicio: 
 ** 1. Usar un for para recorrer el array de números 
 ** 2. En cada iteración mostrar en consola si el número es par o impar
 */

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`El número ${numeros[i]} es par`);
    } else {
        console.log(`El número ${numeros[i]} es impar`);
    }
}
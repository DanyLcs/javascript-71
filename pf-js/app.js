/**
 *! Estructuras de datos
 *! Qué son y por qué son importantes?  
 *todo: Son estructuras que nos ayudan a agrupar y/o ordenar datos 
 *todo: Para minipular estos datos de manera más eficiente 
 *todo: Datos no representan nada por si solo 
 *todo: Datos juntos y dándoles contexto se vuelve información  
 * 
 **Array
 *? Es una estructura de datos ordenada  
 **IMPORTANTE 
 *? Los datos se identifican por un indice, el indice empieza a contar desde 0 
 *? El tamaño real se cuenta desde 1  
 **IMPORTANTE, pero particular para JS
 *? Podemos guardar cualquier tipo de dato dentro del array, incluso combinaciones  
 *? Tienen tamaño dinámico 
 * 
 * 
 * 
 * 
 */

// Definición de un array
const arrayVacío = [];

const arrayContenido = ["Daniela, 26, true"];
const months = ["Jan", "March", "April", "June"];

/** 
 *todo: Obtención de un elemento guardado en un array
 *todo: notación corchete []
 */

console.log(arrayContenido[1]);
console.log(arrayContenido[0]);
console.log(arrayContenido[3]);

/**
 *! Ingresar datos al array  
 *? Métodos
 *? 1. Unshift para ingresar elementos al comienzo del array 
 *? 2. Push para ingresar elementos al final del array 
 */

console.log("Array antes");
console.log(arrayContenido);
arrayContenido.unshift("Aldo");
console.log("Array después");
console.log(arrayContenido);

console.log("Array antes");
console.log(arrayContenido);
arrayContenido.push("Kenay", false);
console.log("Array después");
console.log(arrayContenido);

/**
 *! Eliminar datos 
 ** 1. Shift elimina y devuelve el elemento en la posición 0 
 ** 2. Pop elimina y devuelve el útlimo elemento del array 
 * 
 *? Nota:  
 *? Lo que va dentro de los paréntesis de un método o función se conoce como argumento 
 */

console.log("Array antes");
console.log(arrayContenido);
// arrayContenido.shift();
console.log(`Elemento eliminado ${arrayContenido.shift()}`);
console.log("Array después");
console.log(arrayContenido);

console.log("Array antes");
console.log(arrayContenido);
// arrayContenido.pop();
console.log(`Elemento eliminado ${arrayContenido.pop()}`);
console.log("Array después");
console.log(arrayContenido);

/**
 *! Reasignar el valor de un índice 
 */

let valorAnterior = arrayContenido[0]; // Guardar un valor antes de reasignarlo
arrayContenido[0] = "Kenia";
arrayContenido[2] = "Nube";
console.log("El valor anterior es: " + valorAnterior); // Guardar un valor antes de reasignarlo
console.log(`Resultado de la reasignación de un elemento ${arrayContenido}`);
console.log(arrayContenido);

/**
 *! Splice 
 *? 1. Elimina o agrega elementos  
 *? Orden eliminar: Número de inicio y lo que se va a eliminar 
 *? Orden: Número de inicio, lo que se va a eliminar y que se va a agregar 
 */

console.log("====Splice====");
arrayContenido.splice(1, 1);
console.log(arrayContenido);
arrayContenido.splice(1, 2);
console.log(arrayContenido);

// Agregar elementos
months.splice(3, 0, "Nairobi");
console.log(months);

/**
 *todo: Splice tiene 3 partes que van dentro de los paréntesis (1, 2, 3)
 *todo: 1. Indica la posición donde va a iniciar a eliminar o a agregar 
 *todo: 2. Cuántos elementos va a eliminar 
 *todo: 3. Qué elementos va a agregar  
 */

console.log("Array meses antes");
console.log(months);
console.log("Array meses después");
months.splice(1, 0, "Feb");
console.log(months);

console.log("Array meses antes");
console.log(months);
console.log("Array meses después");
months.splice(4, 1);
console.log(months);
/**
 * Prompt: 
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario.
 *  1.2 Usar el valor inmediatamente
 * !importante
 * 1. No se recomienda su uso en aplicaciones en producción.
 * 2. Bloquea el código, esto quiere decir que el código que este debajo de donde escribimos el uso de prompt no se va a ejecutar, hasta que el usuario inglese algo. 
 * 3. No se puede personalizar. 
 * 4. Todo lo que ingresa mediante prompt siempre es un String.
 * 
 * Nota: 
 * ? \n es un caracter que nos inserta un salto de línea.
 */

const edad = prompt("Ingresa tu edad", 26); /**El primero es el mensaje y después de la coma es el valor por defecto*/
const nombre = prompt("Ingresa tu nombre", "Daniela"); /**Si pones solo "" quiere decir String vacío*/
console.log(edad);
console.log("Hola soy " + nombre + " y tengo " + edad + " años ");

const serie = prompt ("Ingresa tu serie favorita");
const personaje = prompt ("Ingresa tu personaje favorito de esa serie");
const porque = prompt ("Por qué es tu personaje favorito?");
console.log("Hola mi serie favorita es " + serie + " mi personaje favorito de esa serie es " + personaje + " me gusta porque " + porque)

alert("Hola mi serie favorita es " + serie + " mi personaje favorito de esa serie es " + personaje + " me gusta porque " + porque); /**Ventanita, tampoco es recomendable usarlo*/
// comentario de una linea
/*comentario multilinea*/ 

/**
*En JS hay 3 formas de declarar variables
*!Existe una forma que ya no se recomienda su uso
*!var
*
*Al proceso de crear una variable y darle un valor se le llama asignación
*
*Las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran: 
*?let nombreVariable = valor;
*
**El operador = se conoce como operador de asignación 
*Una vez creada una variable podemos usarla en otros lugares del código utilizando su nombre, las variables al ser utilizadas no van entre ""
*
* Las variables que no pueden ser asignadas (su valor no puede cambiar) se declaran:
* ?const nombreVariable = valor;
* 
* Notas: Palabras reservadas: Son palabras que utiliza el lenguaje de programación y si intentamos usarlas en otros lados pueden generar error.
*/ 

let nombre = "daniela"; //tipo String
let name = "kenay";
console.log(nombre);
console.log(name);

const birthYear = 2000; //tipo número
console.log(birthYear);

/* Reasignando una variable (cambiando el valor que tiene)
    Cuando reasignamos una variable (una variable ya creada)
    !Ya no es necesario poner let 
*/

nombre = "aldo";
console.log(nombre);
console.log(name);

/**Sección de prueba 
birthYear = 1995;
*/

/**
 * Concatenar:
 * Nos permite pegar el valor de una variable a un texto
 */

console.log("Hola soy " + nombre + " y estoy en gen con " + name + " nací en el año " + birthYear);
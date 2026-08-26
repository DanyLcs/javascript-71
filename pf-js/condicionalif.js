/**
 * Condicionales
 * Serie de condiciones para que algo suceda
 * 
 * En programación para el manejo de estas condiciones tenemos:
 * !El bloque if else
 * ?El bloque if pregunta por una condición en caso de que esta condición sea verdadera ejecuta un bloque de código, en caso de ser falso no ejecuta nada.
 * ?Else maneja la ejecución de código en caso negativo. 
 * 
 * Lo que se coloca dentro del if, debe ser algo que genere un
 * *valor True o False (tipo de dato boolean)
 */

/**Convertir de texto a número
 *!importante 
    Si se trata de convertir algo que no es un número como resultado obtendremos Nan (not found)
 */ 

const birthYear = Number(prompt("Ingresa tu fecha de nacimiento"));
let age = 2026 - birthYear;
console.log(age)

/**
 * todo: Operadores lógicos
 * Sirven para hacer operaciones cuyo resultado es Verdadero o Falso
 * == es el símbolo de igualdad en programación
 * 
 * Mayor que > 
 * 2 > 1 == Verdadero
 * 1 > 2 == Falso
 * 0 > 0 == Falso
 * 
 * Menor que <
 * 2 < 1 == Falso
 * 3 < 5 == Verdadero
 * 2 < 2 == Falso 
 * 
 * Comparador de igualdad ==
 * 2 == 2 == Verdadero
 * 3 == 1 == Falso
 * 
 * Mayor o igual que >=
 * 2 >= 2 == Verdadero 
 * 2 >= 1 == Verdadero
 * 2 >= 3 == Falso 
 * 
 * Menor o igual que <=
 * 4 <= 4 == Verdadero
 * 4 <= 5 == Verdadero 
 * 7 <= 5 == Falso 
 * 
 * Diferente de !=
 * 5 != 4 == Verdadero 
 * 5 != 5 == Falso 
 * 99 != 100 == Verdadero
 * 
 * Negación (not) ! //Cambia los valores de un booleano
 * !Verdadero == Falso
 * !Falso == Verdadero 
 * !(4 <= 4) == Falso
 * 
 * And && Es un operador que devuelve
 * ?Verdadero solo si ambos lados de la expresión son Verdadero
 * ?Si un lado es Falso todo el resultado se vuelve Falso
 * Verdadero && Verdadero == Verdadero
 * Verdadero && Falso == Falso
 * Falso && Verdadero == Falso
 * 
 * age >= 6 && age <= 12
 * age 7 == Verdadero
 * age 15 == Falso
 * age 5 == Falso
 * 
 * Or || Es un operador que devuelve
 * ?Falso si ambos lados de la expresión son Falso
 * ?Si un lado de la expresión es Verdadero devuelve Verdadero
 * Verdadero || Falso == Verdadero
 * Falso || Verdadero == Verdadero
 * Falso || Falso == Falso
 * 
 * age > 20 || age < 100
 * age 101 == Verdadero
 * age 18 == Verdadero 
*/

/**
 * Dentro de los paréntesis va la condición que se va a evaluar
 * Dentro de las llaves va el código que se va a ejecutar en caso de que la condición sea verdadero
 * 
 * ? else if
 * Nos permite evaluar más de una condición
 * Va asociado a un if 
 */
if (age >= 18) {
    alert("Bienvenido eres mayor de edad");
}    else if (age >= 12 && edad <=17) {
        alert ("Felicidades estás en la secundaria");
}   else if (age >= 6 && edad <=11) {
        alert("Felicidades estás en la primaria")
}   else {
        alert("Aún no puedes pasar, vuelve cuando cumplas los 18");
}



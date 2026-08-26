/**
 * ! Loops (bucle)
 * ! Son estructuras de control que nos permiten repetir n cantidad de veces un bloque de código {}
 * 
 * todo: Tenemos 3 grandes loops
 * todo: While
 * todo: Do while
 * todo: For
 */

 /** 
  *? While
  *? Es un loop que se ejecuta mientras una condición sea verdadera, en cuanto está condición se vuelve verdadera para
  *! IMPORTANTE 
  *! Necesita un contador externo o una forma de parar 
  *! No olvides actualizar el contador
  *! Puedes generar un bucle infinito  
  */ 

 //1. Contador: Se usan generalmente para contar las vueltas que das cuando usas ciclos
 let counter = 0;

 //2.Iniciamos el bucle
 while (counter <= 100) {
    console.log(counter);
    counter = counter + 1;
 }

 counter = 1;

 /**
  ** % operador
  ** regresa el residuo de una división
  ** ejemplo:
  ** 5 % 2 = 1
  ** 6 % 2 = 0
  */
 
 while (counter < 200) {
    if (counter % 2 == 0) {
        console.log(`El número ${counter} es par`);
    } else {
        console.log(`El número ${counter} es impar`);
    }
    //operador de incremento suma 1 a el valor de la variable
    counter ++; 
 }
 
 


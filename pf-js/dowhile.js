/**
 *! do while
 *! El bucle do while, siempre se ejecuta por lo menos una vez 
 *?     Al ejecutar primero y luego evaluar 
 *?     Te permite tener una ejecución garantizada
 * 
 *! Necesita un contador externo 
 *! No debemos olvidar actualizar dicho contador
 */

 let counter = 0;
 do {
    console.log("Hola");
    console.log(counter);
    //operador de suma y asignación
    counter += 1;
 } while (counter <= 100);
console.log(counter);

counter = 1;

do {
    if (counter % 2 == 0) {
        console.log(`El número ${counter} es par`);
    } else {
        console.log(`El número ${counter} es impar`);
    }
    counter++;
}   while (counter < 200);

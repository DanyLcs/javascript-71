/**
 *todo: Callbacks
 ** Es una función que se pasa como argumento a otra función, para ser ejecutada en el momento que la función que recibe el callback lo decida.  
 *? Funciones ciudadanos de primera clase  
 ** Todas las funciones son tratadas como si fueran un valor 
 */

 function procesarPago(nombreCliente, callback, cuenta) {
    const saldoAPagar = callback(cuenta);
    console.log(`El cliente ${nombreCliente} debe pagar ${saldoAPagar} después de impuestos`);
 }

/**
 *todo: Opciones para la función de callback
 ** 1. Crear una función aparte y luego mandarla como argumento
 ** 2. Crear una función anónima dentro de los paréntesis de la función principal
 */

function addIVA(cuenta) {
    return cuenta * 1.16;
}

procesarPago("Kenay", addIVA, 2000);

// Procesar pago con función anónima, 2 ejemplos, uno con function y otro con arrow function

console.log("----------Callback con función anónima----------");
    procesarPago(
        "Betsy",
        function (cuenta) {
            return cuenta * 1,2;
        },
        2000,
    );

console.log("----------Callback con arrow function----------");

procesarPago("Aldo", (cuenta) => cuenta * 1.3, 2000);
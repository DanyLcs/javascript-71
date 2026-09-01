// Función básica o function declaration

    // 1. Detectar la función, es decir, primero se coloca la función y se le pone el nombre 
        function saludar(params) {
            console.log("Hola");
}

    // 2. Usar la función (invocar o llamar), es decir, se pone el nombre de la función y los paréntesis para llamar la función y que se vea reflejada en la consola
        saludar ()
        saludar ()
        saludar ()


// Función con parámetros 

    function saludarConNombre(name, edad) {
    console.log(`Hola ${name} mucho gusto en conocerte no sabía que tenías ${edad} años`);
}

// Pasando argumentos a una función
    saludarConNombre("Daniela", 26);
    saludarConNombre("Aldo",22);
    saludarConNombre(33, "Hola");


// Función que retorna algo
/** 
 *! IMPORTANTE 
 ** Cuando usamos "return" 
 *! 1. Termina la ejecución de la función  
 *! 2. El valor retornado debe ser ocupado o nunca vamos a verlo  
 */    
    //Nota: Expresión: Cualquier operación que retorna un valor
    
    function multiplyToNumbers(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            return a * b; // Finaliza ejecución
        } else {
            return "Por favor envia dos números"; // Finaliza ejecución
        }
        console.log("Nunca me vas a ver");
    }

// Aquí no voy a ver nada 
    multiplyToNumbers(2, 3);

// Imprimiendo el valor de retorno en consola
    console.log(multiplyToNumbers (3, 5));
    console.log(multiplyToNumbers(3, "Daniela"));


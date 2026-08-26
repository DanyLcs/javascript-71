/** 
** Switch:
** Es una estructura de control condicional
** Pero a diferencia del if no se basa en valores de verdad o falso
** Si no que se basa en opciones
*? Nos permite tener múltiples opciones  
*? y con base en la opción seleccionada ejecuta un bloque de código
*? tiene una respuesta or default. por si la opción ingresada no está en la lista
*
*? Se divide en casos
*? cada caso lleva su bloque de código y debe llevas al finalizar la palabra break 
*
*Nota: 
*todo: Expresiones: Es todo aquello que genera un valor
** ejemplos: una suma, usa una variablem usa una función
** texto, número
*todo: Declaraciones (statement): No genera valor y por lo general son estruturas de control o bucles
** ejemplo: el if, el switch, el for, el while
*
*
*
*
*
*
*/

// let month = prompt("Escribe el mes que te gustaría");

// switch(month){
//     case "Enero":
//         alert("El mes de Enero es el primer mes del año");
//         break;
//     case "Febrero":
//         alert(`El mes ${month} es el segundo mes del año`);
//         //"El mes " + month + " es el segundo mes del año"
//         break;
//     case "Marzo":
//         alert(`El mes ${month} es el tercer mes del año`);
//         break;
//     case "Abril":
//     case "Marzo":
//         console.log("Abril y marzo");
//         break;
//     default:
//     //Si no se cumplen las condiciones de arriba, se muestra esto
//         alert("El mes seleccionado no aplica")
// }

let countries = prompt(`Selecciona un país:
    1. Cánada
    2. México
    3. Francia
    4. Italia
    5. España`)

    switch(countries){
        case "Cánada":
            alert("La capital de Cána es Ottawa");
            break;
        case "México":
            alert(`La capital de ${countries} es CDMX`);
            break;
        case "Francia":
            alert(`La capital de ${countries} es París`);
            break;
        case "Italia":
            alert(`La capital de ${countries} es Roma`);
            break;
        case "España":
            alert(`La capital de ${countries} es Madrid`);
            break;
        default:
            alert("El país seleccionado no aplica")
    }

// switch: valores específicos / opciones / etiquetas 
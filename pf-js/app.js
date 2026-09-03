/**
 ** Objetos en JS (JSON) 
 ** Son una estructura de datos, similar a diccionarios o mapas 
 *? Se organiza en pares 
 *? Llave: Valor asociado 
 *? Es una estructura de datos desordenada 
 *? Aquí los datos se obtienen mediante su llave 
 *
 *! No son los mismos objetos que los de Programación orientada a objetos 
 *! Las llaves no se pueden repetir 
 * 
 ** Curiosidades 
 ** En esta notación se volvio el estándar para intercambio de información entre cliente y servidor en la WEB
 *  
 *todo: JSON (JavaScript Object Notation)
 *   
 *
 */

 //todo: Como declarar un objeto

const participante = {
    name: "Daniela",
    lastname: "Chagal",
    age: 27, 
    isAlive: true,
    sayHi: function () {
        console.log("Daniela dice Hola");
    },
    ch:71,
} 

//todo: Cómo acceder a los valores
//? 1. Notación punto (más usado)
//? 2. Notación corchete, el nombre va entre comillas como si fuera String

console.log(`El nombre de la participante es ${participante.name}, obtenido con notación punto`);

console.log(`La edad de la participante es ${participante["age"]}, obtenido con notación corchete`);

participante.sayHi();

//todo: Cómo agregar un nuevo par llave valor

console.log(participante);
participante.favoriteAnimals = ["Perro", "Capibara", "Tiburón"];
console.log(participante);

participante.address = {
    zipcode: "548023",
    country: "Mexico",
};

//todo: Cómo accedemos a la info de objetos o arrays anidados (objetos o arrays dentro de otro objeto y otro array)

console.log(
    `El primer animal favorito de ${participante.name} es ${participante.favoriteAnimals[0]}`,
);
console.log(participante.favoriteAnimals);

console.log(
    `El código postal de ${participante.name} es ${participante.address["zipcode"]}`,
);

//todo: Cómo modificar el valor de una llave

participante.age = 25;
console.log(participante.age);

//todo: Cómo eliminar una llave 
delete participante.ch;
console.log(participante);

//todo: Cómo iterar (recorrer) sobre el objeto
for (const llave in participante) {
    console.log(`El valor de la llave ${llave} es ${participante[llave]}`);
    console.log(llave);
}
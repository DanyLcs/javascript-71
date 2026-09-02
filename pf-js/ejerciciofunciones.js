/**
 *!Actividad"
 *todo: Crear un juego donde la computadora genera un número secreto y el usuario tiene 3 intentos para adivinarlo  
 * 
 */

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function adivinarNumero() {
    let numeroSecreto = Math.floor(getRandomArbitrary(1, 11));
    for (let intento = 1; intento <=3; intento++) {
        let numeroUsuario = Number(prompt("Adivina el número del 1 al 10"));
        if (numeroUsuario === numeroSecreto) {
            console.log(prompt("Adivinaste!"));
        } else if (numeroUsuario < numeroSecreto) {
            console.log(prompt("Pista: el número secreto es mayor"));
        } else {
            console.log(prompt("Pista: el número secreto es menor"));6
        }
    }
}

adivinarNumero();
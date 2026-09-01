//Function expression

const getTriangleArea = function (base, height) {
    return (base * height) / 2;
};

let area = getTriangleArea(20, 24);
console.log(`El área de un tríangulo de base de 20 y altura 24 es ${area}`);

const ejercicio = function (number) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(i + " es par");
        } else {
            console.log(i + " es impar");
        }
    }
}

ejercicio(30);


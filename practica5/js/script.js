const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const preguntar = (interrogante) => {
    return new Promise((resolver) => {
        readline.question(interrogante + " ", (respuesta) => {
            resolver(respuesta);
        });
    });
};

function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function contarVocales(texto) {
    let contador = 0;
    let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

function encontrarMayor(arreglo) {
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}

function sumar(n1, n2) { return n1 + n2; }
function restar(n1, n2) { return n1 - n2; }
function multiplicar(n1, n2) { return n1 * n2; }
function dividir(n1, n2) { return n2 !== 0 ? n1 / n2 : "Error: División por cero"; }

async function iniciarEjecucion() {
    let limiteFizzBuzz = parseInt(await preguntar("Por favor, introduzca el número límite para la secuencia:"));
    for (let i = 1; i <= limiteFizzBuzz; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

    let nFibonacci = parseInt(await preguntar("¿Cuántos elementos desea generar de la serie Fibonacci?:"));
    let a = 0, b = 1;
    let resultadoFibonacci = "";
    for (let i = 0; i < nFibonacci; i++) {
        resultadoFibonacci += a + " ";
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
    console.log("Secuencia numérica obtenida: " + resultadoFibonacci);

    let numPrimoEvaluar = parseInt(await preguntar("Escriba un valor para comprobar si es un número primo:"));
    if (esPrimo(numPrimoEvaluar)) {
        console.log("El valor " + numPrimoEvaluar + " corresponde a un número primo");
    } else {
        console.log("El valor " + numPrimoEvaluar + " no corresponde a un número primo");
    }

    let numTabla = parseInt(await preguntar("Indique el dígito para calcular su respectiva tabla de multiplicar:"));
    console.log("Valores calculados para el " + numTabla + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(numTabla + " x " + i + " = " + (numTabla * i));
    }

    let cadenaTexto = await preguntar("Escriba una frase o palabra para analizar:");
    console.log("Cantidad de letras vocales detectadas: " + contarVocales(cadenaTexto));

    let misNumeros = [4, 8, 15, 16, 23, 42];
    console.log("El elemento con el valor más alto dentro de la lista [" + misNumeros + "] es: " + encontrarMayor(misNumeros));

    let calcNum1 = parseFloat(await preguntar("Digite el primer valor numérico de la operación:"));
    let calcNum2 = parseFloat(await preguntar("Digite el segundo valor numérico de la operación:"));
    let operacion = await preguntar("Escriba la acción que desea ejecutar (sumar, restar, multiplicar, dividir):");

    if (operacion === "sumar") {
        console.log("El cálculo final es: " + sumar(calcNum1, calcNum2));
    } else if (operacion === "restar") {
        console.log("El cálculo final es: " + restar(calcNum1, calcNum2));
    } else if (operacion === "multiplicar") {
        console.log("El cálculo final es: " + multiplicar(calcNum1, calcNum2));
    } else if (operacion === "dividir") {
        console.log("El cálculo final es: " + dividir(calcNum1, calcNum2));
    } else {
        console.log("La acción ingresada no es válida");
    }

    readline.close();
}

iniciarEjecucion();

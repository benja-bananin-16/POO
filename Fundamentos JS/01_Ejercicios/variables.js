// Variable global
var globalVar = "Este es un alcance global";

// Variable local
let localVar = "Este es un alcance local";

// Constante
const mes = "Mayo";

// Tipos de variables
var numeroEntero = 42;
var numeroDecimal = 3.14;
var cadenaTexto = "Hola, Mundo!";
var booleano = true;
var arreglo = [1, 2, 3, "cuatro", "cinco"];
var objeto = { clave1: "valor1", clave2: 2, clave3: true };
var indefinida;
var nulo = null;

// Función para realizar una operación simple
function operacion(a, b) {
  return a + b;
}

// Mostrar los valores de las variables en la consola
console.log("Variable global:", globalVar);
console.log("Variable local:", localVar);
console.log("Constante mes:", mes);
console.log("Número entero:", numeroEntero);
console.log("Número decimal:", numeroDecimal);
console.log("Cadena de texto:", cadenaTexto);
console.log("Booleano:", booleano);
console.log("Arreglo:", arreglo);
console.log("Objeto:", objeto);
console.log("Indefinida:", indefinida);
console.log("Nulo:", nulo);
console.log("Resultado de la operación (5 + 3):", operacion(5, 3));

// Agregar más variables para practicar
var variableAdicional = "Esta es una variable adicional";
console.log("Variable adicional:", variableAdicional);

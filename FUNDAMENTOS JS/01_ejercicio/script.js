//ejercicios creacion de variables 

//una variable
var Global= "Global"
//variable local
let Local ="Local"
//constante
const Constante = "Constante"

console.log("variables: Global:" + Global + "Local: "
            + Local + "- Constante" + Constante); 



 // Declaración de variables
let numeroDecimal = 6.5;
let cadenaTexto = "¡Que pasa chavalessss!";
let booleano = true;
let arreglo = [1, 2, 3, 4, 5];
let objeto = { Nombre: "Benjamin", Apellido: "Farias", Rut: "22162563-3" };
let variableIndefinida;
let variableNula = null;

function sumar(num1, num2) {
    return num1 + num2;
}

console.log("Variables:\ndecimal:" + numeroDecimal + "\ncadena de texto:" + cadenaTexto + "\nbooleano: " + booleano + "\narreglo : " + arreglo + "\nobjeto: " + JSON.stringify(objeto) + "\nindefonida" + variableIndefinida + "\nnulo:" + variableNula + "\nresultado de funcion:" +
+ sumar());
console.log( sumar ())
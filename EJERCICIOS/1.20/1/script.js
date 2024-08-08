let nombre = prompt("Escribir un nombre: ");
let apellido = prompt("Escribir un apellido: ");
let edad = prompt("Escribe tu edad: ");

function mostrarDatos(nombre, apellido, edad){
    console.log(`El nombre completo es: ${nombre} ${apellido}`)
    console.log(`La edad es: ${edad}`)
}

mostrarDatos(nombre, apellido, edad);
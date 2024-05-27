// Función para modificar el mensaje
function modificarMensaje() {
    const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    let eliminados = [];
    let agregados = [];

    // Modificaciones
    eliminados.push(mensajeInicial.shift()); // Elimina "Hola"
    eliminados.push(mensajeInicial.pop());   // Elimina "C"
    mensajeInicial.unshift("Somos");         // Agrega "Somos" al inicio
    mensajeInicial.push("del mundo");        // Agrega "del mundo" al final
    mensajeInicial.splice(1, 0, "nosotros"); // Agrega "nosotros" en la segunda posición
    mensajeInicial.splice(6, 1, "los");      // Reemplaza "de" por "los"
    mensajeInicial.splice(8, 0, "mejores");  // Agrega "mejores" antes de "del mundo"

    // Valores agregados
    agregados = ["Somos", "nosotros", "del mundo", "los", "mejores"];

    const mensajeModificado = mensajeInicial;
    
    alert(`Arreglo inicial: ${mensajeInicial.join(" ")}
Arreglo final: ${mensajeModificado.join(" ")}
Valores eliminados: ${eliminados.join(", ")}
Valores agregados: ${agregados.join(", ")}`);
}

// Función para operar con métodos en un arreglo numérico
function operandoMetodos() {
    let arregloNumerico = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    let eliminados = [];
    let suma = 0;

    // Copia inicial del arreglo
    const arregloInicial = [...arregloNumerico];

    // Modificaciones
    eliminados.push(arregloNumerico.shift()); // Elimina el primer elemento
    eliminados.push(arregloNumerico.pop());   // Elimina el último elemento
    arregloNumerico.unshift(101);             // Agrega 101 al inicio
    arregloNumerico.push(202);                // Agrega 202 al final

    // Sumar todos los elementos
    suma = arregloNumerico.reduce((acc, val) => acc + val, 0);

    const arregloFinal = arregloNumerico;

    alert(`Arreglo inicial: ${arregloInicial.join(", ")}
Arreglo final: ${arregloFinal.join(", ")}
Valores eliminados: ${eliminados.join(", ")}
Suma de todos los elementos: ${suma}`);
}

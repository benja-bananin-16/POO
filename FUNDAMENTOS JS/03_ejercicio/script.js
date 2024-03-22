function modificarMensaje() {
    const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const mensajeModificado = ["Somos", "nosotros", "todos", "los", "estudiantes", "de", "programación", "los", "mejores", "del mundo"];

    const valoresEliminados = mensajeInicial.splice(0, 1); // Elimina "Hola"
    mensajeInicial.unshift("Somos"); // Agrega "Somos" al inicio
    mensajeInicial.splice(7, 1, "los"); // Reemplaza "de" por "los"
    mensajeInicial.splice(8, 0, "mejores"); // Agrega "mejores" después de "los"
    
    const valoresAgregados = mensajeModificado.pop(); // Elimina "del mundo"
    mensajeInicial.push("del", "mundo"); // Agrega "del" y "mundo" al final

    const resultadoFinal = `Arreglo inicial: ${mensajeInicial.join(" ")}\nArreglo final: ${mensajeModificado.join(" ")}\nValores eliminados: ${valoresEliminados}\nValores agregados: ${valoresAgregados}`;
    alert(resultadoFinal);
}
 

function operandoMetodos() {
    // Declaración e inicialización de la variable `arregloInicial`
    let arregloInicial = [997, 777, 234, 160706, 2112, 343, 89, 800, 234];
  
    // Cálculo de la suma inicial
    const sumaInicial = arregloInicial.reduce((a, b) => a + b, 0);
  
    // Modificaciones al arreglo
    arregloInicial.push(1100); // Agregamos un elemento al final
    arregloInicial.unshift(89); // Agregamos un elemento al inicio
    arregloInicial.shift(); // Eliminamos un elemento del inicio
    arregloInicial.pop(); // Eliminamos un elemento del final
  
    // Cálculo de la suma final
    const sumaFinal = arregloInicial.reduce((a, b) => a + b, 0);
  
    // Obtener valores eliminados y agregados
    const valoresEliminados = [arregloInicial[0], arregloInicial[arregloInicial.length - 1]];
    const valoresAgregados = [arregloInicial[0], arregloInicial[arregloInicial.length - 1]];
  
    // Crear mensaje completo
    const mensajeCompleto = `
      Arreglo inicial: ${arregloInicial.join(", ")}
      Arreglo final: ${arregloInicial.join(", ")}
      Valores eliminados: ${valoresEliminados.join(", ")}
      Valores agregados: ${valoresAgregados.join(", ")}
      Suma inicial: ${sumaInicial}
      Suma final: ${sumaFinal}
    `;
  
    // Mostrar mensaje completo en una sola alerta
    alert(mensajeCompleto);
  }
  


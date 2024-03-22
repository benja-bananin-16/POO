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
  let arreglo = [100, 16, 70, 60, 64, 777, 666, 102, 567];
  let arreglo_inicial = [100, 16, 70, 60, 64, 777, 666, 102, 567];
  let eliminados = [];
  let insertados = [];

  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());
  eliminados.push(arreglo.pop());

  insertados.unshift(1);
  insertados.unshift(2);
  insertados.unshift(3);
  insertados.unshift(4);
  insertados.unshift(5);
  insertados.unshift(6);
  insertados.unshift(7);
  insertados.unshift(8);

  const sumaFinal = arreglo_inicial.reduce((a, b) => a + b, 0); // Calcula la suma de los elementos en el arreglo_inicial

  let suma = 0; // Declaración de la variable suma

  // Suma de valores en el arreglo después de todas las operaciones
  arreglo.forEach(numero => {
      suma += numero;
  });

  // Construir la cadena con toda la información
  let mensaje = `Los números iniciales son: ${arreglo_inicial}\n`;
  mensaje += `Los números eliminados son: ${eliminados}\n`;
  mensaje += `Los números insertados son: ${insertados}\n`;
  mensaje += `La suma final de los números iniciales es: ${sumaFinal}\n`;
  mensaje += `El arreglo final es: ${arreglo}\n`;
  mensaje += `La suma de todos los elementos es: ${suma}`;

  // Mostrar el mensaje de alerta final
  alert(mensaje);
}

// Llamada a la función
operandoMetodos();



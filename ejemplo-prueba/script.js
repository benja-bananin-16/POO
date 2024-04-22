function noNegative(arr) {    
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
          arr[i] = 0;
      }
  }
  return arr;
}

function mostrarResultado() {
  let inputArray = document.getElementById("inputArray").value;
  let array = inputArray.split(",").map(Number); // Convertir la cadena de entrada en un array de números

  let resultado = noNegative(array); // Llamar a la función para modificar el array

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado.join(", "); // Mostrar el resultado en el HTML
}
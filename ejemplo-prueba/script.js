function modificarNegativos() {
  var arregloOriginal = document.getElementById("arreglo1").value.split(",").map(Number);
  var arregloModificado = arregloOriginal.map(function(num) {
      return num < 0 ? 0 : num;
  });
  document.getElementById("resultado1").innerHTML = "<p>Arreglo original: " + arregloOriginal.join(", ") + "</p><p>Arreglo modificado: " + arregloModificado.join(", ") + "</p>";
}

function sumarElementos() {
  var arreglo = document.getElementById("arreglo2").value.split(",").map(Number);
  var suma = arreglo.reduce(function(a, b) {
      return a + b;
  }, 0);
  document.getElementById("resultado2").innerHTML = "<p>Arreglo: " + arreglo.join(", ") + "</p><p>Suma de elementos: " + suma + "</p>";
}
function filtrarNumerosPositivos(arr)
{
    var resultado= [];
    for (var i=0; i <arr.lenght; i++) {
        if (arr[i] > 0) {
            resultado.push(arr[i]);
        }
    }
    alert("Numeros Positivos: " + resultado.join(","));
    filtrarNumerosPositivos([-1, 2, -3, 4, 5]);

}
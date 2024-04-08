function identificarMayorEdad() {
    let resultado = "";
    let numero = prompt("Por favor ingrese un numero: ");

    if (numero > 0) { 
        resultado = `<h2>El numero es positivo</h2>`;
    } else if (numero < 0 ) { 
        resultado = `<h2>El numero es negativo</h2>`;
    } else {
        resultado = `<h2>El numero es 0</h2>`;
    }

    document.getElementById('lista').innerHTML = resultado;
}

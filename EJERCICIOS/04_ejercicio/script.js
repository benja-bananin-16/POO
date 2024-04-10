function identificarMayorEdad() {
    let resultado = "";
    let numero = parseInt(prompt("Por favor ingrese un numero: "));

    if (numero > 0) { 
        resultado = `<h2>El numero ${numero} es positivo</h2>`;
    } else if (numero < 0 ) { 
        resultado = `<h2>El numero ${numero} es negativo</h2>`;
    } else if (numero == 0){
        resultado = `<h2>El numero es 0</h2>`;
    }
    else {
        resultado = `Ingrese un valor correcto`
    }

    document.getElementById('lista').innerHTML = resultado;
}

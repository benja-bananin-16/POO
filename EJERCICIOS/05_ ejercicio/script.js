function determinarRangoPuntuacion() {
    let resultado = "";
    let numero = prompt("Por favor ingrese un numero: ");
    
    if (numero >= 90) {
        resultado = `<h2>Excelente</h2>`;
    } else if (numero >= 70 && numero <= 89) {
        resultado = `<h2>Buen Trabajo</h2>`;
    } else if (numero <70) {
        resultado = `<h2>Necesitas Mejorar</h2>`;
    } else{
        resultado= `ingrese un valor valido`;
    }
    document.getElementById('lista').innerHTML = resultado;

    
}

function modificarNegativos() {
    let arreglo = [4, -3, 7, -1, 0, -8, 5];
    
    let arregloOriginal = [...arreglo];
    
    let arregloModificado = arreglo.map(num => num < 0 ? 0 : num);
    
    alert(`Arreglo original: ${arregloOriginal.join(", ")}
Arreglo modificado: ${arregloModificado.join(", ")}`);
}

function sumarElementos() {
    let arreglo = [4, -3, 7, -1, 0, -8, 5];

    let suma = arreglo.reduce((acc, num) => acc + num, 0);
    
    alert(`Arreglo: ${arreglo.join(", ")}
Suma de todos los elementos: ${suma}`);
}

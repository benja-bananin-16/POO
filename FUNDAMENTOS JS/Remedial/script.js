function obtenerMenorYMayor(array) {
    // Convertir el primer elemento a número para iniciar menor y mayor
    let menor =array[0];
    let mayor =array[0];
    
    // Recorrer el array para encontrar el menor y el mayor
    for (let i = 1; i < array.length; i++) {
        let numero = Number(array[i]); // Convertir cada elemento a número
        if (numero < menor) {
            menor = numero;
        }
        if (numero > mayor) {
            mayor = numero;
        }
    }

    // Devolver el resultado como un objeto
    return { menor, mayor };
}

// Ejemplo de uso: crear un array desde la entrada del usuario
let input = prompt("Ingrese los números separados por comas:");
let array = input.split(','); // Solo dividir en elementos sin convertir a número
let resultado = obtenerMenorYMayor(array);

console.log("El menor es:", resultado.menor);
console.log("El mayor es:", resultado.mayor);

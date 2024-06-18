const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const temperaturas = [];  // Definimos la lista temperaturas

for (let dia of dias) {
    let temperatura = parseFloat(prompt(`Ingrese la temperatura del ${dia}: `));
    temperaturas.push(temperatura);
}

const mayor = Math.max(...temperaturas);
const menor = Math.min(...temperaturas);

const dia_mayor = dias[temperaturas.indexOf(mayor)];
const dia_menor = dias[temperaturas.indexOf(menor)];

// Imprimimos los resultados
console.log(`Temperaturas ingresadas: ${temperaturas}`);
console.log(`Valor mayor: ${mayor.toFixed(2)}°C (el ${dia_mayor})`);
console.log(`Valor menor: ${menor.toFixed(2)}°C (el ${dia_menor})`);

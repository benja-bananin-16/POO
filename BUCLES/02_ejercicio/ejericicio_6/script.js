function contarfor() {
    let numeros = [];
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Por favor ingrese las calificaciones ${i + 1}: `));
        numeros.push(numero);
        suma +=numero;
    }

    let promedio = suma / numeros.length;

    document.getElementById('lista').innerHTML = `Las notas son: <h2>${numeros}</h2> y el promedio es: <h2>${promedio}</h2>`;
}


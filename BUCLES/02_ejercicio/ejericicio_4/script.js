function contarfor() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Por favor ingrese el número ${i + 1}: `));
        numeros.push(numero);
    }

    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    document.getElementById('lista').innerHTML = `los numeros son: <h2>${numeros}</h2> El número mayor es: <h2>${mayor}</h2>`;
}

function contarfor() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Por favor ingrese el número ${i + 1}: `));
        array.push(numero);
    }

    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }

    document.getElementById('lista').innerHTML = `los numeros son: <h2>${array}</h2> El número mayor es: <h2>${mayor}</h2>`;
}

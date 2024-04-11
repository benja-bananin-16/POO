function contarfor(){
    let cantidadPares = parseInt(prompt(`Por favor ingrese la cantidad de números pares:`));
    let numeros = [];
    let resultado = ("")

    for (let n = 2; numeros.length < cantidadPares; n += 2) 
        numeros.push(n);

    document.getElementById('lista').innerHTML = `La cantidad de pares de ${cantidadPares} son: <h2>${numeros}</h2>`;
}

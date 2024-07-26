function contarwhile(){
    let contador = 0;
    let array = [];

    while (contador <= 20){
        array.push(contador);
        contador+=2;
    }
    
    document.getElementById('lista').innerHTML =`primeros 10 numeros pares: <br> <h2>${array}</h2>`;
}

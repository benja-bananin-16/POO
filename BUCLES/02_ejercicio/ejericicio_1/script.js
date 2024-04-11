function contarwhile(){
    let contador = 0;
    let array = [];

    while (contador <= 100){
        array.push(contador);
        contador+=5;
    }
    
    document.getElementById('lista').innerHTML =`Números de 5 en 5 con While <br><h2>${array}</h2>`;
}

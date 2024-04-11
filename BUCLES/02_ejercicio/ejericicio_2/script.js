function contarwhile(){
    let contador = 0;
    let suma = 0; 
    let array = [];

    while (contador <= 10){
        array.push(contador);
        suma += contador; 
        contador++;
    }
    
    document.getElementById('lista').innerHTML =`suma del 1 al 10 <br><h2>${array} = ${suma}</h2>`;
}

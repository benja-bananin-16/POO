function contar(){
    let contador = 20;
    let array = [];

    while (contador > 9){
        array.push(contador);
        contador--;
    }
    
    document.getElementById('lista').innerHTML =`Números del 20 al 10 <br> <h2>${array}</h2>`;
}

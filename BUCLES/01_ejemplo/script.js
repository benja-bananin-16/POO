function contar(){
    let contador = 20;
    let array = [];

    while (contador > 9){
        array.push(contador);
        contador--;
    }
    
    document.getElementById('lista').innerHTML =array;
}

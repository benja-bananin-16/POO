function contarwhile(){
    let contador = 20;
    let array = [];

    while (contador > 9){
        array.push(contador);
        contador--;
    }
    
    document.getElementById('lista').innerHTML =`Números del 20 al 10 con While <br><h2>${array}</h2>`;
}

function contarFor(){
    let array = [];

    for (let i= 20; i >= 10; i--){
        array.push(i);
    }
    
    document.getElementById('lista').innerHTML =`Números del 20 al 10 con For <br><h2>${array}</h2>`;
}


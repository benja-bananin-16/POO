function contarfor(){
    let array = [];
    let numero1 = parseInt(prompt("Por favor ingrese el numero 1: "));
    let numero2 = parseInt(prompt("Por favor ingrese el numero 2: "));
    let numero3 = parseInt(prompt("Por favor ingrese el numero 3: "));
    let numero4 = parseInt(prompt("Por favor ingrese el numero 4: "));
    let numero5 = parseInt(prompt("Por favor ingrese el numero 5: "));
    
    for (let i= 20; i >= 10; i--){
        array.push(i);
    }
    
    document.getElementById('lista').innerHTML =`Numero mayor <br><h2>${array}</h2>`;
}

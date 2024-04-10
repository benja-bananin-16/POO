function identificarMayorEdad()
{
    let resultado = "";
    let numero1 = parseInt(prompt("Por favor ingrese el numero 1: "));
    let numero2 = parseInt(prompt("Por favor ingrese el numero 2: "));

    if(numero1 >=numero2){
        resultado =`El numero ${numero1} es mayor que el numero ${numero2}`
    } else if (numero2 >= numero1) {
        resultado =`El numero ${numero2} es mayor que el numero ${numero1}`
    } else if (numero1 == numero2) {
        resultado =`los numeros son iguales`
    }
    
    document.getElementById('lista').innerHTML = resultado;

}
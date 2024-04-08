function identificarMayorEdad()
{
    let resultado = "";
    let numero1 = prompt("Por favor ingrese el numero 1: ");
    let numero2 = prompt("Por favor ingrese el numero 2: ");

    if(numero1 >=numero2){
        resultado =`El numero ${numero1} es mayor que el numero ${numero2}`
    } else {
        resultado =`El numero ${numero2} es mayor que el numero ${numero1}`
    }
    document.getElementById('lista').innerHTML = resultado;

}
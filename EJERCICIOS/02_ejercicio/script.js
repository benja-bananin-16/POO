function identificarTemperatura()
{
    let resultado = "";
    let temp = prompt("Por favor ingrese la temperatura: ");

    if(temp <= 0){
        resultado =`<h2>Hace Frio</h2>`
    } else if (temp >0 && temp <= 25){
        resultado =`<h2>La temperatura es agradable</h2>`
    } else if (temp =>25){
        resultado=`<h2>Hace Calor</h2>`
    } else {
        resultado= `Ingrese un valor correcto`
    }
    document.getElementById('lista').innerHTML = resultado;

}
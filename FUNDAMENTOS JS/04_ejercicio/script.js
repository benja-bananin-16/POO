function identificarMayorEdad()
{
    //Identificar si es mayor o menor de edad
    let edad = prompt("Por favor ingrese su edad: ");
    
    if(edad >= 18){
        alert(`Es mayor de edad: ${edad}`)
    }
    else{
        alert(`Es menor de edad: ${edad}`)
    }
}
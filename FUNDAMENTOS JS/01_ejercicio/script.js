function identificarMayorEdad()
{
    let edad = prompt("Por favor ingrese su edad: ");

    if(edad >=18){
        alert(`Es mayor de edad, tiene: ${edad}`);
    } else {
        alert(`Es menor de edad, tiene: ${edad}`);
    }
} 
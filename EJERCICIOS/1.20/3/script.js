let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));

function evaluarCreciente(a, b){
    if(a < b){  
        console.log("Es creciente")

    }
    else{
        console.log("Es decreciente")

    }
}
evaluarCreciente(num1, num2);
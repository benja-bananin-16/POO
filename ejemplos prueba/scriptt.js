function noNegative() {
    let array = [];
    let N = parseInt(prompt(`Ingrese la cantidad de numeros a trabajar: `));
    
    for(let i = 0; i < N; i++){ 
        let num = parseInt(prompt(`Ingrese numero positivo o negativo: `));
        array.push(num);
    }
    let original = [...array]:
    for(let i = 0; i < N; i++){
        if (array[i] < 0){
            array[i] = 0;
        }
    }
    
    document.getElementById("lista").innerHTML = `Arreglo original: ${original.join(", ")} <br> Nuevo Arreglo: ${array.join(", ")}`;
};



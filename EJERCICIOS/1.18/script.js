let count = 0;

const countCards = card => {
    const cardValues = {
        '2': 1, '3': 1, '4': 1, '5': 1, '6': 1,
        '7': 0, '8': 0, '9': 0,
        '10': -1, 'J': -1, 'Q': -1, 'K': -1, 'A': -1 
    };
    count += cardValues[String(card).toUpperCase().trim()] || 0;
    // actualizar el conteo con el valor de la carta o 0 si no está en el diccionario
    // convierte la carta a cadena, a mayúsculas y eliminar espacios
    return `${count} ${count > 0 ? "Apuesta" : "Espera"}`;
    //devuelve el conteo, apuesta si es positivo y espera si es 0
};

document.getElementById("agregar").addEventListener("click", () => {
    const cards = document.getElementById("nombre").value.split(",");
    //divide el input nombre en un array de cartas
    const result = cards.map(countCards).pop();
    //procesa todas las cartas y obtiene el ultimo resultado
    const li = document.createElement("li");
    //crea un nuevo li en la lista
    li.textContent = result;
    document.getElementById("lista").appendChild(li);
    //agrega el nuevo li a la lista con un id nuevo
});

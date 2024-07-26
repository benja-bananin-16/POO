// Lección 6: Usar 'this' para cambiar texto y atributos
function changeImage(element) {
    // Cambiar la imagen y el texto alternativo
    element.src = 'https://i.scdn.co/image/ab67616d00001e02271167792bb7dbbb21a3db1f';
    element.alt = 'https://i.scdn.co/image/ab67616d00001e02271167792bb7dbbb21a3db1f';
}

// Lección 7: Usar 'this' para mostrar descripciones
function showDescription(button) {
    // Alternar la visualización de la descripción
    let description = button.nextElementSibling;
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
}

// Lección 8: Usar 'this' para cambiar estilos
function completeTask(button) {
    // Marcar una tarea como completada
    let taskItem = button.parentElement;
    let taskText = taskItem.querySelector('span');
    taskText.classList.toggle('completed');
}

// Lección 9 y 10: Interacciones más complejas
function applyDiscount(button) {
    // Aplicar un descuento al precio del producto
    let productCard = button.parentElement;
    let priceElement = productCard.querySelector('.price');
    let currentPrice = parseFloat(priceElement.textContent.replace('$', ''));
    let newPrice = (currentPrice * 0.5).toFixed(3);
    priceElement.textContent = `$${newPrice}`;
}

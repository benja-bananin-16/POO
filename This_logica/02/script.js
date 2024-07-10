document.getElementById('agregar').addEventListener('click', function() {
    addName(this);
});

function addName(button) {
    const nameInput = button.previousElementSibling;
    const nameList = document.getElementById('lista');

    if (nameInput.value.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = nameInput.value;
        nameList.appendChild(listItem);
        nameInput.value = "";
        nameInput.focus();
    } else {
        alert('Por favor, ingrese un nombre.');
    }
}

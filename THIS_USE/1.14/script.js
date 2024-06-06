            function turnOff(button) {
            if (button.innerText === "Activado") {
                button.innerText = "Desactivado";
                button.classList.add('btn-danger');
            } else {
                button.innerText = "Activado";
                button.classList.remove('btn-danger');
            }
        }
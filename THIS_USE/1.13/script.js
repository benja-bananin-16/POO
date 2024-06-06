        function hide(element) {
        element.remove();
        }
        function turnOff(element) {
            element.innerText = "Off";
            }

            function turnOff(button) {
                if (button.innerText === "On") {
                    button.innerText = "Off";
                    button.classList.remove('btn-primary');
                    button.classList.add('btn-danger');
                } else {
                    button.innerText = "On";
                    button.classList.remove('btn-danger');
                    button.classList.add('btn-primary');
                }
            }
    
            function hide(image) {
                image.style.opacity = image.style.opacity === "0" ? "1" : "0";
            }
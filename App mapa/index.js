document.addEventListener("DOMContentLoaded", function() {
    var botonPanico = document.getElementById("boton-panico");
    var botonAlerta = document.getElementById("boton-alerta");

    botonPanico.addEventListener("click", function() {
        alert("¡Alerta de pánico! Presionaste el botón de pánico.");
    });

    botonAlerta.addEventListener("click", function() {
        alert("Se ha enviado una alerta a las autoridades.");
    });
});

function Login() {
    let resultado = "";
    let usuario = prompt("Por favor ingrese su usuario: ");

    if (usuario === "usuario123") { 
        let contraseña = prompt("Por favor ingrese su contraseña: ");
        if (contraseña = "secreto") { 
            resultado = `<h2>Acceso Concedido :D</h2>`;
        } else {
            resultado = `<h2>Acceso Denegado</h2>`;
        }
    } else {
        resultado = `<h2>Acceso Denegado :(</h2>`;
    }
    document.getElementById('lista').innerHTML = resultado;
}

let esModo = 'registro';

function alternarModo() {
  esModo = esModo === 'registro' ? 'login' : 'registro';
  const esLogin = esModo === 'login';

  document.getElementById('titulo').textContent    = esLogin ? 'Iniciar sesión'      : 'Crear cuenta';
  document.getElementById('subtitulo').textContent = esLogin ? 'Bienvenido de vuelta' : 'Ingresa tus datos para registrarte';
  document.getElementById('btnEnviar').textContent = esLogin ? 'Entrar'              : 'Registrarse';

  document.getElementById('campoUsuario').style.display   = esLogin ? 'none' : '';
  document.getElementById('campoConfirmar').style.display = esLogin ? 'none' : '';

  document.getElementById('enlaceModo').innerHTML = esLogin
    ? '¿No tienes cuenta? <a onclick="alternarModo()">Regístrate</a>'
    : '¿Ya tienes cuenta? <a onclick="alternarModo()">Inicia sesión</a>';

  limpiarErrores();
}

function limpiarErrores() {
  ['usuario', 'correo', 'contrasena', 'confirmar'].forEach(id => {
    document.getElementById(id)?.classList.remove('error');
  });
  ['errorUsuario', 'errorCorreo', 'errorContrasena', 'errorConfirmar'].forEach(id => {
    document.getElementById(id)?.classList.remove('visible');
  });
}

function marcarError(campoId, errorId) {
  document.getElementById(campoId).classList.add('error');
  document.getElementById(errorId).classList.add('visible');
}

function validarCorreo(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contrasena').addEventListener('input', function () {
    let fuerza = [this.value.length >= 6, this.value.length >= 10,
                  /[A-Z]/.test(this.value) && /[0-9]/.test(this.value),
                  /[^A-Za-z0-9]/.test(this.value)].filter(Boolean).length;

    const niveles = [
      { ancho: '0%',   color: 'transparent', texto: '' },
      { ancho: '25%',  color: '#e24b4a',     texto: 'Débil' },
      { ancho: '50%',  color: '#ef9f27',     texto: 'Regular' },
      { ancho: '75%',  color: '#639922',     texto: 'Fuerte' },
      { ancho: '100%', color: '#1d9e75',     texto: 'Muy fuerte' },
    ];

    const { ancho, color, texto } = niveles[fuerza];
    document.getElementById('barraFuerza').style.cssText = `width:${ancho};background:${color}`;
    document.getElementById('textoFuerza').textContent = texto;
  });
});

function enviarFormulario() {
  limpiarErrores();
  const correo     = document.getElementById('correo').value.trim();
  const contrasena = document.getElementById('contrasena').value;
  let valido = true;

  if (!validarCorreo(correo))  { marcarError('correo',     'errorCorreo');     valido = false; }
  if (contrasena.length < 6)   { marcarError('contrasena', 'errorContrasena'); valido = false; }

  if (esModo === 'registro') {
    const usuario   = document.getElementById('usuario').value.trim();
    const confirmar = document.getElementById('confirmar').value;
    if (usuario.length < 3)        { marcarError('usuario',   'errorUsuario');   valido = false; }
    if (contrasena !== confirmar)  { marcarError('confirmar', 'errorConfirmar'); valido = false; }
  }

  if (valido) mostrarExito(
    esModo === 'registro' ? '¡Registro exitoso!'  : '¡Bienvenido!',
    esModo === 'registro' ? 'Tu cuenta fue creada.' : 'Has iniciado sesión correctamente.'
  );
}

function mostrarExito(titulo, mensaje) {
  document.getElementById('vistaFormulario').style.display = 'none';
  document.getElementById('vistaExito').style.display      = 'block';
  document.getElementById('tituloExito').textContent       = titulo;
  document.getElementById('mensajeExito').textContent      = mensaje;
}
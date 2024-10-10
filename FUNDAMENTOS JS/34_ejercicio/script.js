let prev = ''; // Guarda el primer número
let op = '';   // Guarda el operador

// Función cuando se presiona un número
function press(num) {
    let display = document.getElementById('display');

    // Comprobamos si el display muestra '0'
    if (display.innerText === '0') {
        display.innerText = num; // Reemplazamos '0' por el número presionado
    } else {
        display.innerText += num; // Añadimos el número presionado al final
    }
}

// Función cuando se selecciona un operador
function setOP(operator) {
    let display = document.getElementById('display');
    
    // Si no hay un número previo, guardamos el número actual
    if (prev === '') {
        prev = display.innerText; // Guardamos lo que está en pantalla
    } else {
        calculate(); // Si ya hay un número previo, hacemos el cálculo
    }

    op = operator; // Guardamos el operador seleccionado
    display.innerText = '0'; // Reseteamos el display para el próximo número
}

// Función para realizar el cálculo
function calculate() {
    let display = document.getElementById('display');
    let curr = display.innerText; // Obtenemos el número actual en el display
    let result = 0; // Variable para el resultado
 
    // Usando solo switch para las operaciones
    switch (op) {
        case '+':
            result = parseFloat(prev) + parseFloat(curr);
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
    }

    display.innerText = result; // Muestra el resultado en el display
    prev = ''; // Resetea el número previo
    op = '';   // Resetea el operador
}

// Función para limpiar la calculadora
function clr() {
    document.getElementById('display').innerText = '0'; // Resetea el display a 0
    prev = ''; // Resetea el número previo
    op = '';   // Resetea el operador
}

// Evento para manejar pulsaciones de teclas
document.onkeydown = function(event) {
    switch (event.which) { // Utiliza 'event.which' para obtener el código de la tecla
        case 48: // '0'
            press(0);
            break;
        case '1': // '1'
            press(1);
            break;
        case 50: // '2'
            press(2);
            break;
        case 51: // '3'
            press(3);
            break;
        case 52: // '4'
            press(4);
            break;
        case 53: // '5'
            press(5);
            break;
        case 54: // '6'
            press(6);
            break;
        case 55: // '7'
            press(7);
            break;
        case 56: // '8'
            press(8);
            break;
        case 57: // '9'
            press(9);
            break;
        case 107: // '+' (numpad)
        case 61:  // '+' (Shift + igual)
            setOP('+');
            break;
        case 109: // '-' (numpad)
        case 54:  // '-' (Shift + 6)
            setOP('-');
            break;
        case 106: // '*' (numpad)
            setOP('*');
            break;
        case 111: // '/' (numpad)
            setOP('/');
            break;
        case 190: // '.' (numpad o punto)
            press('.');
            break;
        case 13:  // 'Enter'
            calculate();
            break;
        case 8:   // 'Backspace'
        case 67:  // 'C' para limpiar
        case 99:  // 'c' para limpiar
            clr();
            break;
    }
};























/*let previousInput = '';
let operator = '';

function press(num) {
    let display = document.getElementById('display');
    display.innerText = display.innerText === '0' ? num : display.innerText + num;
}

function setOP(op) {
    let display = document.getElementById('display');
    if (previousInput === '') previousInput = display.innerText;
    else calculate();
    operator = op;
    display.innerText = '0';
}

function calculate() {
    let display = document.getElementById('display');
    let prev = parseInt(previousInput);
    let curr = parseInt(display.innerText);
    let result;

    if (operator === '+') result = prev + curr;
    else if (operator === '-') result = prev - curr;
    else if (operator === '*') result = prev * curr;
    else if (operator === '/') result = prev / curr;

    display.innerText = result;
    previousInput = '';
    operator = '';
}

function clr() {
    document.getElementById('display').innerText = '0';
    previousInput = '';
    operator = '';
}*/

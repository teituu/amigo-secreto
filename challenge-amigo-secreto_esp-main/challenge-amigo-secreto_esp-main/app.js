// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtener el campo de texto
    const nombre = input.value.trim(); // Obtener el valor y eliminar espacios en blanco

    // Validar si el campo está vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.'); // Mostrar alerta si está vacío
        return; // Salir de la función
    }

    amigos.push(nombre); // Agregar el nombre al array
    actualizarLista(); // Actualizar la lista en la página
    input.value = ''; // Limpiar el campo de texto
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtener el elemento ul
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li'); // Crear un elemento li
        li.textContent = amigo; // Asignar el nombre del amigo al li
        listaAmigos.appendChild(li); // Agregar el li a la lista
    });
}

// Función para realizar el sorteo con cuenta regresiva
function sortearAmigo() {
    if (amigos.length < 2) { // Validar si hay al menos dos amigos
        alert('Necesitas al menos dos amigos para realizar el sorteo.'); // Mostrar alerta
        return; // Salir de la función
    }

    const resultado = document.getElementById('resultado'); // Obtener el elemento para mostrar el resultado
    resultado.innerHTML = ''; // Limpiar el resultado anterior

    // Seleccionar un nombre aleatorio del array
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado en la página
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);

    // Mostrar cuenta regresiva antes de recargar
    let tiempoRestante = 5; // 5 segundos
    const intervalo = setInterval(() => {
        if (tiempoRestante > 0) {
            resultado.innerHTML += `<li>La página se recargará en ${tiempoRestante} segundos...</li>`;
            tiempoRestante--;
        } else {
            clearInterval(intervalo); // Detener el intervalo
            window.location.reload(); // Recargar la página
        }
    }, 1000); // Actualizar cada segundo (1,000 milisegundos)
}

// Event listener para agregar nombres al presionar "Enter"
document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { // Verificar si la tecla presionada es "Enter"
        agregarAmigo(); // Llamar a la función para agregar el nombre
    }
});
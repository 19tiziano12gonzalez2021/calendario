let addButton = document.getElementById("agregar");
let eventosList = document.getElementById("eventos");
let feedbackDiv = document.querySelector("div > p");
let eventos = JSON.parse(localStorage.getItem('eventos')) || []; // Obtener los eventos guardados en Local Storage o crear un arreglo vacío

// Función para agregar un evento a la lista
function agregarEvento() {
  let fechaInput = document.getElementById("fecha"); // Obtener el campo de fecha
  let tituloInput = document.getElementById("titulo"); // Obtener el campo de título
  let horaInput = document.getElementById("hora"); // Obtener el campo de hora
  let descripcionInput = document.getElementById("descripcion"); // Obtener el campo de descripción
  
  if (fechaInput.value === "" || tituloInput.value === "" || horaInput.value === "" || descripcionInput.value === "") { // Verificar si algún campo está vacío
    feedbackDiv.innerText = "Por favor, completa todos los campos."; // Mostrar feedback de error
  } else {
    let evento = { // Crear un objeto para el evento
      fecha: fechaInput.value,
      titulo: tituloInput.value,
      hora: horaInput.value,
      descripcion: descripcionInput.value
    };
    eventos.push(evento); // Agregar el objeto del evento al array de eventos
    let eventoItem = document.createElement("li"); // Crear un elemento <li> para el evento
    let eventoText = document.createTextNode(evento.fecha + " - " + evento.hora + " - " + evento.titulo); // Crear un nodo de texto para el contenido del evento
    eventoItem.appendChild(eventoText); // Agregar el nodo de texto al elemento <li>
    eventosList.appendChild(eventoItem); // Agregar el elemento <li> a la lista de eventos
    let descripcionText = document.createElement("p"); // Crear un elemento <p> para la descripción del evento
    descripcionText.innerText = evento.descripcion; // Establecer el texto del elemento <p>
    eventoItem.appendChild(descripcionText); // Agregar el elemento <p> como hijo del elemento <li> correspondiente
    feedbackDiv.innerText = ""; // Borrar cualquier feedback previo
    fechaInput.value = ""; // Borrar el contenido del campo de fecha
    tituloInput.value = ""; // Borrar el contenido del campo de título
    horaInput.value = ""; // Borrar el contenido del campo de hora
    descripcionInput.value = ""; // Borrar el contenido del campo de descripción
    localStorage.setItem("eventos", JSON.stringify(eventos));
  }
}

// Cargar los eventos guardados al iniciar la página
function cargarEventos() {
  eventos.forEach(evento => {
    let eventoItem = document.createElement("li");
    let eventoText = document.createTextNode(evento.fecha + " " + evento.hora + " - " + evento.titulo);
    eventoItem.appendChild(eventoText);
    eventosList.appendChild(eventoItem);
    let descripcionText = document.createElement("p");
    descripcionText.innerText = evento.descripcion;
    eventoItem.appendChild(descripcionText);
  });
}

addButton.addEventListener("click", agregarEvento);

cargarEventos(); // Llamar a la función para cargar los eventos al iniciar la página


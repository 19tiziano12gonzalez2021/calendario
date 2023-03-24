let addButton = document.getElementById("agregar"); // Obtener el botón Agregar
let eventosList = document.getElementById("eventos"); // Obtener la lista de eventos
let feedbackDiv = document.querySelector("div > p"); // Obtener el elemento p para el feedback

// Función para agregar un evento a la lista
function agregarEvento() {
  let fechaInput = document.getElementById("fecha"); // Obtener el campo de fecha
  let tituloInput = document.getElementById("titulo"); // Obtener el campo de título
  let descripcionInput = document.getElementById("descripcion"); // Obtener el campo de descripción
  
  if (fechaInput.value === "" || tituloInput.value === "" || descripcionInput.value === "") { // Verificar si algún campo está vacío
    feedbackDiv.innerText = "Por favor, completa todos los campos."; // Mostrar feedback de error
  } else {
    let eventoItem = document.createElement("li"); // Crear un elemento <li> para el evento
    let eventoText = document.createTextNode(fechaInput.value + " - " + tituloInput.value); // Crear un nodo de texto para el contenido del evento
    eventoItem.appendChild(eventoText); // Agregar el nodo de texto al elemento <li>
    eventosList.appendChild(eventoItem); // Agregar el elemento <li> a la lista de eventos
    let descripcionText = document.createElement("p"); // Crear un elemento <p> para la descripción del evento
    descripcionText.innerText = descripcionInput.value; // Establecer el texto del elemento <p>
    eventoItem.appendChild(descripcionText); // Agregar el elemento <p> como hijo del elemento <li> correspondiente
    feedbackDiv.innerText = ""; // Borrar cualquier feedback previo
    fechaInput.value = ""; // Borrar el contenido del campo de fecha
    tituloInput.value = ""; // Borrar el contenido del campo de título
    descripcionInput.value = ""; // Borrar el contenido del campo de descripción
    document.getElementById("hora").value
  }
}

// Agregar un controlador de eventos al botón Agregar
addButton.addEventListener("click", agregarEvento);

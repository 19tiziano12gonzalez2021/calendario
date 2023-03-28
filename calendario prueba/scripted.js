let tareasTotales = []
function agregarTarea(){
    let fecha = document.getElementById("fecha").value,
    hora = document.getElementById("hora").value,
    titulo = document.getElementById("titulo").value,
    descripcion = document.getElementById("descripcion").value
    tareasTotales.push({fecha:fecha}, {hora:hora}, {titulo:titulo}, {descripcion:descripcion})
    localStorage.setItem("tarea",JSON.stringify({nuevaTarea:tareasTotales}))
    console.log(localStorage.getItem("tarea"))
}

function mostrarLista(){
    tareasTotales = JSON.parse(localStorage.getItem("tarea"))
    tareasTotales.forEach(element => {
        console.log(element.titulo, element.hora, element.descripcion)
            document.getElementById("lista").innerHTML+= `<li>${element.titulo}</br>${element.hora}${element.descripcion}</li>`
    });
}
    // localStorage.clear
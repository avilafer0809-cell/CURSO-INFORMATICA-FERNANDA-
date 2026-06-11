const botonTema = document.getElementById("btn-tema")
const cuerpoPagina = document.body;

botonTema.addEventListener("click", function() {
    cuerpoPagina.classList.toggle("modo oscuro");

    if (cuerpoPagina.classList.contains("modo oscuro")) {
        botonTema.textContent = "Cambiar a Modo Claro";
    } else {
        botonTema.textContent = "Cambiar a Modo Oscuro";
    }
});

const listaProyectos = [
    {
        titulo: "Pensamiento Matematico Interact",
        descripcion: "Aplicacion web para mejorar los habitos de estudio mediante gamificacion y ejercicios guiados Desarrollado con HTML, CSS y JS modular.",
        enlace: "#"
    },
    {
        titulo: "Plano Fraccionamiento Nazas",
        descripcion: "Diseno tecnico en AutoCAD exportado y visualizado a traves de una interfaz web responsiva, cumpliendo con las normativas electricas",
        enlace: "#"
    },
    {
        titulo: "Calculo Luminico DIALux",
        descripcion:"Memoria descriptiva y reporte de calculos de iluminacion integrados en una galeria dinamica para proyectos arquitectonicos",
        enlace:"#"
    }
]

const contenedor = document.getElementById("contenedor-proyectos");

listaProyectos.forEach(function(proyecto, indice) {
    const tarjetaHTML = `
        <div class="tarjeta-proyecto">
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion.substring(0, 50)}...</p>
            <button class="btn-abrir-modal" data-indice="${indice}">Ver detalles</button>
            </div>
    `;
        
    contenedor.innerHTML += tarjetaHTML;
});

const modal= document.getElementById("modal-proyecto");
const btnCerrarModal = document.getElementById("btn-cerrar-modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalDesc = document.getElementById("modal-desc");
const botonesAbrirModal = document.querySelectorAll(".btn-abrir-modal");

botonesAbrirModal.forEach(function(boton) {
    boton.addEventListener("click",function(){
        const indiceExtraido = boton.getAttribute("data-indice");
        const proyectoSeleccionado = listaProyectos[indiceExtraido];

        
    })
})
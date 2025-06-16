const proyectos = [
  {
    titulo: "Practica 1",
    descripcion: "",
    imagen: "",
    link: "../dia-2/index.html",
  },
  {
    titulo: "Practica 2",
    descripcion: "",
    imagen: "",
    link: "../dia-3/index.html",
  },
  {
    titulo: "Practica 3",
    descripcion: "",
    imagen: "",
    link: "../dia-5/index.html",
  },
  {
    titulo: "Practica 4",
    descripcion: "",
    imagen: "",
    link: "../dia-6/index.html",
  },
  {
    titulo: "Practica 5",
    descripcion: "",
    imagen: "",
    link: "../dia-7/index.html",
  },
  {
    titulo: "Practica Calificada 1",
    descripcion: "",
    imagen: "",
    link: "../practica 1/index.html",
  },
  {
    titulo: "Practica Calificada 2",
    descripcion: "",
    imagen: "",
    link: "../practica 2/index.html",
  },
  {
    titulo: "Practica Calificada 3",
    descripcion: "",
    imagen: "",
    link: "../practica 3/index.html",
  },
];

const contenedor = document.getElementById("contenedor-proyectos");

proyectos.forEach((proyecto, index) => {
  const card = document.createElement("div");
  card.className = "card-proyectos";
  card.innerText = proyecto.titulo;
  card.addEventListener("click", () => abrirModal(index));
  contenedor.appendChild(card);
});

function abrirModal(index) {
  const proyecto = proyectos[index];
  document.getElementById("modal-titulo").innerText = proyecto.titulo;
  document.getElementById("modal-imagen").src = proyecto.imagen;
  document.getElementById("modal-descripcion").innerText = proyecto.descripcion;
  document.getElementById("modal-link").href = proyecto.enlace;

  document.getElementById("modal-proyecto").classList.remove("oculto");
}

document.getElementById("cerrar-modal").addEventListener("click", () => {
  document.getElementById("modal-proyecto").classList.add("oculto");
});

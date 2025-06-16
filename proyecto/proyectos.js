/* const proyectos = [
  {
    titulo: "Practica 1",
    descripcion:
      "Practica basica de las bases de HTML, revisando h1, h2, h3..., asi como ul's y ol's, insercion de imagenes y estilos basicos de css como background-color y tamaños de imagenes",
    imagen: "./imagenes/practica1.png",
    link: "../dia-2/index.html",
  },
  {
    titulo: "Practica 2",
    descripcion:
      "Practica basica con las bases de padding y margin. Introduccion a las listas como elemento de html.",
    imagen: "./imagenes/practica2.png",
    link: "../dia-3/index.html",
  },
  {
    titulo: "Practica 3",
    descripcion: "./imagenes/practica3.png",
    imagen:
      "Practica basica sobre las bases de display flex, e introduccion a diseño respónsivo.",
    link: "../dia-5/index.html",
  },
  {
    titulo: "Practica 4",
    descripcion:
      "Practica que combina la insercion y modificacion de imagenes como elemento visual y como contenedor mismo. Aplicacion de distribucion de elementos mediante flex y grid.",
    imagen: "./imagenes/practica4.png",
    link: "../dia-7/index.html",
  },
  {
    titulo: "Practica Calificada 1",
    descripcion:
      "Pagina estatica de presentacion basica, con elementos dinamicos como tarjetas volteables y enlaces",
    imagen: "./imagenes/practicaC1.png",
    link: "../practica 1/index.html",
  },
  {
    titulo: "Practica Calificada 2",
    descripcion:
      "Creacion de formulario basico, haciendo uso de herramientas como flex, gap, margin y padding para la correcta distribucion de los elementos",
    imagen: "./imagenes/practicaC2.png",
    link: "../practica 2/index.html",
  },
  {
    titulo: "Practica Calificada 3",
    descripcion:
      "Maqueta basica de una web sencilla, aprendiendo a colocar header y footer, a la vez que se distribuyen los elementos del body mediante sus correspondientes secciones y divs.",
    imagen: "./imagenes/practicaC3.png",
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
  document.getElementById("modal-link").href = proyecto.link;

  document.getElementById("modal-proyecto").classList.remove("oculto");
}

document.getElementById("cerrar-modal").addEventListener("click", () => {
  document.getElementById("modal-proyecto").classList.add("oculto");
});
 */

const proyectos = [
  {
    titulo: "Practica 1",
    descripcion:
      "Practica basica de las bases de HTML, revisando h1, h2, h3..., asi como ul's y ol's, insercion de imagenes y estilos basicos de css como background-color y tamaños de imagenes",
    imagen: "./imagenes/practica1.png",
    link: "../dia-2/index.html",
  },
  {
    titulo: "Practica 2",
    descripcion:
      "Practica basica con las bases de padding y margin. Introduccion a las listas como elemento de html.",
    imagen: "./imagenes/practica2.png",
    link: "../dia-3/index.html",
  },
  {
    titulo: "Practica 3",
    descripcion:
      "Practica basica sobre las bases de display flex, e introduccion a diseño respónsivo.",
    imagen: "./imagenes/practica3.png",
    link: "../dia-5/index.html",
  },
  {
    titulo: "Practica 4",
    descripcion:
      "Practica que combina la insercion y modificacion de imagenes como elemento visual y como contenedor mismo. Aplicacion de distribucion de elementos mediante flex y grid.",
    imagen: "./imagenes/practica4.png",
    link: "../dia-7/index.html",
  },
  {
    titulo: "Practica Calificada 1",
    descripcion:
      "Pagina estatica de presentacion basica, con elementos dinamicos como tarjetas volteables y enlaces",
    imagen: "./imagenes/practicaC1.png",
    link: "../practica 1/index.html",
  },
  {
    titulo: "Practica Calificada 2",
    descripcion:
      "Creacion de formulario basico, haciendo uso de herramientas como flex, gap, margin y padding para la correcta distribucion de los elementos",
    imagen: "./imagenes/practicaC2.png",
    link: "../practica 2/index.html",
  },
  {
    titulo: "Practica Calificada 3",
    descripcion:
      "Maqueta basica de una web sencilla, aprendiendo a colocar header y footer, a la vez que se distribuyen los elementos del body mediante sus correspondientes secciones y divs.",
    imagen: "./imagenes/practicaC3.png",
    link: "../practica 3/index.html",
  },
];

const contenedor = document.getElementById("contenedor-proyectos");
const contenedorModal = document.querySelector(".modales-proyectos");
const modalProyecto = document.getElementById("modal-proyecto");
const btnCerrarModal = document.getElementById("cerrar-modal");

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
  document.getElementById("modal-link").href = proyecto.link;

  contenedorModal.classList.add("activo");
  modalProyecto.classList.remove("oculto");
}

btnCerrarModal.addEventListener("click", () => {
  contenedorModal.classList.remove("activo");
  modalProyecto.classList.add("oculto");
});

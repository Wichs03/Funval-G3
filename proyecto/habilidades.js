console.log("Script cargado");

const habilidades = [
  {
    id: `html-css`,
    nombre: `Html y css`,
    descripcion: `Desarrollador frontend con sólidos conocimientos en HTML y CSS, y fundamentos prácticos de JavaScript para crear sitios web interactivos y responsivos. Poseo además conocimientos básicos de backend que complementan mi enfoque en el desarrollo de experiencias web eficientes y accesibles.`,
    imagen: `./imagenes/web.webp`,
    nivel: `Avanzado`,
  },
  {
    id: `ingles`,
    nombre: `Inglés`,
    descripcion: `Tengo un nivel intermedio-alto de inglés (B2), lo que me permite desenvolverme con soltura en conversaciones con nativos y comunicarme de manera efectiva con clientes internacionales.`,
    imagen: `./imagenes/ingles.png`,
    nivel: `Intermedio-Alto`,
  },

  {
    id: `versiones`,
    nombre: `Control de versiones`,
    descripcion: `Manejo herramientas como Git para llevar un control eficiente de los cambios en mis proyectos, facilitando la colaboración y la gestión de diferentes versiones del código. Esto garantiza un desarrollo organizado y una fácil resolución de conflictos durante el trabajo en equipo.`,
    imagen: `./imagenes/git.png`,
    nivel: `Intermedio-Alto`,
  },
  {
    id: `responsividad`,
    nombre: `Diseño responsivo`,
    descripcion: `Capacidad para crear interfaces web que se adaptan de manera óptima a distintos dispositivos y tamaños de pantalla, asegurando una experiencia de usuario consistente y accesible tanto en móviles, tablets como en desktop, usando técnicas modernas de CSS y media queries.`,
    imagen: `./imagenes/responsive.webp`,
    nivel: `Intermedio-Alto`,
  },
];

const cardsHabilidades = document.querySelector("#habilidades");

function mostrarModal(habilidad) {
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const imagen = document.createElement("img");
  imagen.src = habilidad.imagen;
  imagen.alt = habilidad.nombre;

  const titulo = document.createElement("h3");
  titulo.textContent = habilidad.nombre;

  const nivel = document.createElement("p");
  nivel.textContent = `Nivel: ${habilidad.nivel}`;
  nivel.classList.add("modalNivel");

  const descripcion = document.createElement("p");
  descripcion.textContent = habilidad.descripcion;

  const botonCerrar = document.createElement("button");
  botonCerrar.textContent = "X";
  botonCerrar.classList.add("btn-cerrar");

  botonCerrar.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  modal.appendChild(imagen);
  modal.appendChild(titulo);
  modal.appendChild(descripcion);
  modal.appendChild(nivel);
  modal.appendChild(botonCerrar);

  overlay.appendChild(modal);

  document.body.appendChild(overlay);
}

habilidades.forEach((habilidad) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = habilidad.nombre;

  card.addEventListener("click", () => {
    mostrarModal(habilidad);
  });

  cardsHabilidades.appendChild(card);
});

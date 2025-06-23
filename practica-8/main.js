// Variables DOM - Casillas individuales
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");
let i = document.getElementById("i");

const svgX = `<img src="./images/icon-x.svg" alt="X" />`;
const svgO = `<img src="./images/icon-o.svg" alt="O" />`;

const indicadorTurno = document.querySelector(".seleccion");

const casillas = document.querySelectorAll(".casilla");

const btnReinicio = document.querySelector(".icono-reinicio img");

const modalOverlay = document.querySelector(".modal-overlay");
const modalTitle = document.querySelector(".modal-title");
const modalSubtitle = document.querySelector(".modal-subtitle");
const modalBtn = document.querySelector(".modal-btn");

const marcadorJugador = document.querySelector("#you .wins");
const marcadorEmpates = document.querySelector("#tie .wins");
const marcadorCPU = document.querySelector("#cpu .wins");

function mostrarModal(titulo, subtitulo) {
  modalTitle.textContent = titulo.toUpperCase();
  modalSubtitle.textContent = subtitulo;
  modalOverlay.classList.remove("hidden");
}

function ocultarModal() {
  modalOverlay.classList.add("hidden");
}

modalBtn.addEventListener("click", () => {
  ocultarModal();
  reiniciarPartida();
});

// Variables del juego
let jugador = "X";
let cpu = "O";
let turno = "jugador";

let tablero = {
  a: "",
  b: "",
  c: "",
  d: "",
  e: "",
  f: "",
  g: "",
  h: "",
  i: "",
};

// Combinaciones ganadoras
const combinacionesGanadoras = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["a", "d", "g"],
  ["b", "e", "h"],
  ["c", "f", "i"],
  ["a", "e", "i"],
  ["c", "e", "g"],
];

// Estado juego
let partidaActiva = true;
let contadorJugadas = 0;
let hayGanador = false;

// Actualizar indicador visual de turno
function actualizarIndicadorTurno() {
  if (!partidaActiva) {
    indicadorTurno.innerHTML = "";
    return;
  }
  if (turno === "jugador") {
    indicadorTurno.innerHTML = `${svgX}<span style="color:#a9bec8; font-weight:bold; margin-left: 6px;">TURN</span>`;
  } else {
    indicadorTurno.innerHTML = `${svgO}<span style="color:#a9bec8; font-weight:bold; margin-left: 6px;">TURN</span>`;
  }
}

// Agregar evento click a cada casilla para jugador
for (let casilla of casillas) {
  casilla.addEventListener("click", (e) => {
    if (turno === "jugador") {
      turnoJugador(e.target.id);
    }
  });
}

// Inicializar indicador de turno
actualizarIndicadorTurno();

// Función para turno del jugador
function turnoJugador(idCasilla) {
  if (!partidaActiva || tablero[idCasilla] !== "" || turno !== "jugador") {
    return;
  }
  // Poner icono y actualizar tablero
  document.getElementById(idCasilla).innerHTML = jugador === "X" ? svgX : svgO;
  tablero[idCasilla] = jugador;
  contadorJugadas++;

  // Verificar si jugador gana
  if (verificarGanador(jugador)) {
    hayGanador = true;
    partidaActiva = false;
    setTimeout(() => {
      marcadorJugador.innerText = parseInt(marcadorJugador.innerText) + 1;
      indicadorTurno.innerHTML = "";
      mostrarModal("You Win!", "X takes the round");
    }, 50);
    return;
  }

  // Verificar empate
  if (contadorJugadas === 9 && !hayGanador) {
    partidaActiva = false;
    setTimeout(() => {
      marcadorEmpates.innerText = parseInt(marcadorEmpates.innerText) + 1;
      indicadorTurno.innerHTML = "";
      mostrarModal("It's a Tie!", "No one wins this round");
    }, 50);
    return;
  }

  turno = "cpu";
  actualizarIndicadorTurno();

  if (partidaActiva) {
    turnoCPU();
  }
}

function turnoCPU() {
  if (!partidaActiva) return;

  function jugar() {
    let casillasVacias = [];

    for (let id in tablero) {
      if (tablero[id] === "") {
        casillasVacias.push(id);
      }
    }
    if (casillasVacias.length === 0) return;

    let indiceAleatorio = Math.floor(Math.random() * casillasVacias.length);
    let casillaElegida = casillasVacias[indiceAleatorio];

    tablero[casillaElegida] = cpu;
    contadorJugadas++;
    document.getElementById(casillaElegida).innerHTML =
      cpu === "X" ? svgX : svgO;

    if (verificarGanador(cpu)) {
      hayGanador = true;
      partidaActiva = false;
      setTimeout(() => {
        marcadorCPU.innerText = parseInt(marcadorCPU.innerText) + 1;
        indicadorTurno.innerHTML = "";
        mostrarModal("CPU Wins!", "O takes the round");
      }, 50);
      return;
    }

    // Verificar empate
    if (contadorJugadas === 9 && !hayGanador) {
      partidaActiva = false;
      setTimeout(() => {
        marcadorEmpates.innerText = parseInt(marcadorEmpates.innerText) + 1;
        indicadorTurno.innerHTML = "";
        mostrarModal("It's a Tie!", "No one wins this round");
      }, 50);
      return;
    }

    turno = "jugador";
    actualizarIndicadorTurno();
  }

  setTimeout(jugar, 700);
}

function verificarGanador(jugadorActual) {
  for (let combinacion of combinacionesGanadoras) {
    let [pos1, pos2, pos3] = combinacion;
    if (
      tablero[pos1] === jugadorActual &&
      tablero[pos2] === jugadorActual &&
      tablero[pos3] === jugadorActual
    ) {
      return true;
    }
  }
  return false;
}

function reiniciarPartida() {
  for (let casilla of casillas) {
    casilla.innerHTML = "";
  }
  for (let id in tablero) {
    tablero[id] = "";
  }
  contadorJugadas = 0;
  hayGanador = false;
  partidaActiva = true;
  turno = "jugador";
  actualizarIndicadorTurno();
}

btnReinicio.addEventListener("click", () => {
  reiniciarPartida();
  ocultarModal();
});

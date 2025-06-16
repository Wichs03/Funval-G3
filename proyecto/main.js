/* document.querySelectorAll(".skills > div").forEach((skillLine) => {
  const card = skillLine.querySelector(".card");
  const imagen = skillLine.querySelector(".imagen");
  const largeCard = skillLine.querySelector(".large-card");

  card.addEventListener("mouseenter", () => {
    imagen.style.opacity = "1";
    imagen.style.visibility = "visible";
    largeCard.style.opacity = "1";
    largeCard.style.visibility = "visible";
  });

  card.addEventListener("mouseleave", () => {
    imagen.style.opacity = "0";
    imagen.style.visibility = "hidden";
    largeCard.style.opacity = "0";
    largeCard.style.visibility = "hidden";
  });
});
 */
function toggleDarkMode() {
  const body = document.body;
  const isDark = body.getAttribute("data-theme") === "dark";
  body.setAttribute("data-theme", isDark ? "light" : "dark");
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let errores = [];

  if (!nombre) {
    errores.push("El nombre es obligatorio.");
  }
  if (!correo) {
    errores.push("El correo es obligatorio.");
  } else if (!emailRegex.test(correo)) {
    errores.push("El correo no es válido.");
  }
  if (!mensaje || mensaje.length < 20) {
    errores.push("El mensaje debe tener al menos 20 caracteres.");
  }

  if (errores.length > 0) {
    alert(errores.join("\n"));
  } else {
    alert("Hemos recibido sus datos, le contactaremos en breve.");

    this.reset();
  }
});

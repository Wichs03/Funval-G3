const contenedor = document.querySelector(".contenedor");

async function renderizarCards() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    contenedor.innerHTML = "";

    data.forEach((usuario) => {
      contenedor.innerHTML += `
        <div class="card rounded-2xl w-auto mx-auto aspect-[3/2] p-4 shadow-md overflow-auto break-words cursor-pointer transition-transform duration-300 hover:shadow-xl hover:scale-105">
          <h3 class="font-semibold text-lg mb-2">Nombre: ${usuario.name}</h3>
          <p class="text-sm text-gray-400">Usuario: ${usuario.username}</p>
          <p class="text-sm text-gray-400 truncate">Email: ${usuario.email}</p>
          <p class="text-sm text-gray-400">Empresa: ${usuario.company.name}</p>
        </div>
      `;
    });
  } catch (error) {
    contenedor.className =
      "min-h-screen grid place-items-center bg-[hsl(0_0%_10%)] px-4";

    contenedor.innerHTML = `
    <div class="card rounded-2xl w-full max-w-md aspect-[3/2] p-6 shadow-md overflow-auto break-words cursor-pointer transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <h3 class="font-semibold text-xl mb-4 text-red-500 text-center">Error al cargar datos</h3>
      <p class="text-sm text-gray-400 text-center">Por favor, intenta nuevamente más tarde.</p>
    </div>
  `;
  }
}

function activarGlowEnCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left + 8;
      const y = e.clientY - rect.top + 8;
      const xp = x / (rect.width + 16);
      const yp = y / (rect.height + 16);

      card.style.setProperty("--x", x);
      card.style.setProperty("--y", y);
      card.style.setProperty("--xp", xp);
      card.style.setProperty("--yp", yp);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--x", -9999);
      card.style.setProperty("--y", -9999);
      card.style.setProperty("--xp", 0);
      card.style.setProperty("--yp", 0);
    });
  });
}

renderizarCards().then(() => {
  activarGlowEnCards();
});

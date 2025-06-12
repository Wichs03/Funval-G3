let mas = document.querySelector("#mas");
let menos = document.querySelector("#menos");
let contador = 0;

mas.addEventListener("click", function () {
  contador++;
  contadorResultado.textContent = contador;
});

menos.addEventListener("click", function () {
  contador--;
  contadorResultado.textContent = contador;
});

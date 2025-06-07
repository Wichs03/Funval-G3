let estudiantes = [
  {
    nombre: "Felipe",
    edad: 33,
    pais: "Chile",
  },
  {
    nombre: "Pablo",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Juana",
    edad: 22,
    pais: "Chile",
  },
  {
    nombre: "Mahonri",
    edad: 18,
    pais: "Guatemala",
  },
  {
    nombre: "Carlo",
    edad: 50,
    pais: "Peru",
  },
];

let lista = document.querySelector(".lista");

for (let index = 0; index < estudiantes.length; index++) {
  lista.innerHTML += `
<li><a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[index].nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiantes[index].edad} ${estudiantes[index].pais}</p>
</a></li>

    `;
}

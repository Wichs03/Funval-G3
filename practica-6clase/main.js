let frutas = ["manzana", "pera", "fresa", "sandia", "mango"];
console.log(frutas);

frutas.push("melon");
console.log(frutas);

let notas = [10, 20, 30, 40, 50, 60];
let resultado = 0;
let notasDoble = [];

/* for (let index = 0; index < notas.length; index++) {
  resultado = resultado + notas[index];
}
console.log(resultado); */
/* 
for (let index = 0; index < notas.length; index++) {
  resultado = notas[index] * 2;
  notasDoble.push(resultado);
}

console.log(notasDoble);

let suma = 0;

let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88];

notasFunval.forEach((nota) => {
  suma = suma + nota;
});

console.log("el promedio es " + suma / notasFunval.length) */
let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];

let promedioFunval = [];
let aprobados = [];

for (let index = 0; index < estudiantes.length; index++) {
  let estudiante = estudiantes[index];
  let suma = 0;

  for (let j = 0; j < estudiante.notas.length; j++) {
    suma = suma + estudiante.notas[j];
  }

  let promedio = suma / estudiante.notas.length;
  console.log(estudiante.nombre, promedio);
  promedioFunval.push(promedio);
}

console.log(promedioFunval);

for (let index = 0; index < promedioFunval.length; index++) {
  if (promedioFunval[index] >= 51) {
    aprobados.push({
      nombre: estudiantes[index].nombre,
      promedio: promedioFunval[index],
    });
  }
}

console.log("Los estudiantes aprobados son: ", aprobados);

let estudiantesArgentinos = [];

for (let index = 0; index < estudiantes.length; index++) {
  if (estudiantes[index].pais === "Argentina") {
    estudiantesArgentinos.push(estudiantes[index].nombre);
  }
}

console.log("Los estudiantes Argentinos son: " + estudiantesArgentinos);

console.log("Script cargado");

let matriz = [
  [5, 3, 12],
  [8, 7, 4],
  [15, 10, 77],
];

function sumaDiagonal(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][i];
  }
  return suma;
}

console.log(sumaDiagonal(matriz));

const estudiantesFunval = [
  { nombre: "Felipe", nota: 89 },
  { nombre: "Thomas", nota: 34 },
  { nombre: "Pablo", nota: 77 },
  { nombre: "woodleine", nota: 68 },
  { nombre: "Mahonri", nota: 23 },
];

let estudiantesAprobados = estudiantesFunval.filter((estudiante) => {
  return estudiante.nota >= 76;
});
console.log(estudiantesAprobados);

function formulaCuadrado(lado) {
  return lado * lado;
}
function formulaRectangulo(baseR, alturaR) {
  return baseR * alturaR;
}
function formulaTriangulo(baseT, alturaT) {
  return (baseT * alturaT) / 2;
}

let figura = parseInt(
  prompt(`Bienvenido a la calculadora de areas, elige la figura de tu eleccion ingresando el numero correspondiente:
    1.- Cuadrado
    2.- Rectangulo
    3.- Triangulo `)
);

switch (figura) {
  case 1:
    let lado = parseFloat(prompt("Ingresa la medida del lado del cuadrado"));
    alert("El area es de " + formulaCuadrado(lado));
    break;

  case 2:
    let baseR = parseFloat(
      prompt("Ingresa la medida de la base del rectangulo")
    );
    let alturaR = parseFloat(
      prompt("Ingresa la medida de la altura del rectangulo")
    );
    alert("El area es de " + formulaRectangulo(baseR, alturaR));
    break;

  case 3:
    let baseT = parseFloat(
      prompt("Ingresa la medida de la base del triangulo")
    );
    let alturaT = parseFloat(
      prompt("Ingresa la medida de la altura del triangulo")
    );
    alert("El area es de " + formulaTriangulo(baseT, alturaT));
    break;

  default:
    alert("Opcion invalida, intente nuevamente");
    break;
}

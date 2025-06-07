let saldo = 1000;

function depositar(cantidad) {
  if (cantidad > 0) {
    saldo += cantidad;
    alert("Gracias por su deposito. El nuevo saldo es $" + saldo);
  } else {
    alert("La cantidad a depositar debe ser mayor a 0");
  }
  return saldo;
}

function retirar(cantidad) {
  if (cantidad <= 0) {
    alert(
      "Error. La cantidad a retirar debe ser mayor a 0, por favor intente de nuevo."
    );
  } else if (cantidad > saldo) {
    alert("Error. Saldo insuficiente, por favor intente de nuevo.");
  } else {
    saldo -= cantidad;
    alert("Operacion exitosa. Su nuevo saldo es de $" + saldo);
  }
}

function consultar() {
  alert("Su saldo es $" + saldo);
}

let operacion = 0;

while (operacion !== 4) {
  operacion = parseInt(
    prompt(`Bienvenido: 
    Eliga su operacion:
    1. Depositar
    2. Retirar
    3. Consultar Saldo
    4. Salir`)
  );

  let cantidad;

  switch (operacion) {
    case 1:
      cantidad = parseFloat(prompt("Ingrese la cantidad a depositar"));
      if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese un numero valido");
      } else {
        depositar(cantidad);
      }
      break;

    case 2:
      cantidad = parseFloat(prompt("Ingrese la cantidad a retirar"));
      if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese un numero valido");
      } else {
        retirar(cantidad);
      }
      break;

    case 3:
      consultar();
      break;

    case 4:
      alert("Gracias por su visita. Hasta pronto. ");
      break;

    default:
      alert("Opcion no valida, intente nuevamente.");
      break;
  }
}

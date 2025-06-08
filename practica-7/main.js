const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 },
];

const productoPrecio = (nombre, precio) => {
  return console.log(nombre, precio);
};

productos.forEach((producto) => {
  productoPrecio(producto.nombre, producto.precio);
});

const soloNombre = productos.map((producto) => producto.nombre);

console.log(soloNombre);

let buscar = "Mouse";
console.log(soloNombre.includes(buscar));

const descuento10 = productos.map((productoDescuento) => {
  return {
    nombre: productoDescuento.nombre,
    precio: productoDescuento.precio * 0.9,
  };
});

console.log(descuento10);

const menosDe100 = productos.filter((producto) => producto.precio < 100);

console.log(menosDe100);

const primerosDos = productos.slice(0, 2);
console.log(primerosDos);

productos.sort((a, b) => a.precio - b.precio);

console.log(productos);

productos.reverse();
console.log(productos);

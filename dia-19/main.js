/* 
Simular un sistema de gestión de usuarios que:
Crea usuarios nuevos.
Actualiza información de un usuario.
Filtra usuarios por rol.
Usa desestructuración y spread en todo momento.
Tareas a resolver
1. Mostrar todos los usuarios (usa desestructuración)
Imprime en consola: "Usuario: Ana, Rol: admin" para cada usuario usando forEach y desestructuración.
2. Agregar un nuevo usuario (usa spread)
Crea una función agregarUsuario(lista, nuevo) que devuelva una nueva lista con el usuario nuevo agregado. No modifiques el array original.
3. Actualizar un usuario por ID (usa spread)
Crea una función actualizarUsuario(lista, id, nuevosDatos) que:
Busque al usuario por id.
Devuelva una nueva lista con los datos actualizados del usuario.
Use spread para mantener los datos anteriores no modificados.*/

const usuarios = [
  { id: 1, nombre: "Ana", rol: "admin", edad: 28 },
  { id: 2, nombre: "Luis", rol: "editor", edad: 34 },
  { id: 3, nombre: "Carla", rol: "viewer", edad: 22 },
];

usuarios.forEach(({ nombre, rol }) => {
  console.log(`Usuario: ${nombre}, Rol: ${rol}`);
});

function agregarUsuario(lista, nuevo) {
  return [...lista, nuevo];
}

let nuevoUsuario = { id: 4, nombre: "Pepe", rol: "admin", edad: 30 };
let usuariosActualizados = agregarUsuario(usuarios, nuevoUsuario);

console.log(usuariosActualizados);

function filtrarPorRol(lista, rol) {
  return lista.filter(({ rol: r }) => r === rol);
}

let admins = filtrarPorRol(usuarios, "admin");
let editors = filtrarPorRol(usuarios, "editor");
let viewers = filtrarPorRol(usuarios, "viewer");

console.log(admins);
console.log(editors);
console.log(viewers);

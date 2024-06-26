// Definición del objeto 'película'
const pelicula = {
  titulo: "Halo 3",
  anio: 2021,
  duracion: "120 minutos",
  precioAlquiler: 5.51,
  alquilada: "no",
  ultimoUsuario: "",

  titulo: "Inception",
  anio: 2010,
  duracion: "148 minutos",
  precioAlquiler: 3.99,
  alquilada: "no",
  ultimoUsuario: "",

  alquilar: function (usuario) {
    this.alquilada = "si";
    this.ultimoUsuario = usuario;
  },

  devolver: function () {
    this.alquilada = "no";
  },

  ultimoAlquiler: function () {
    return this.alquilada === "si"
      ? `La película está alquilada actualmente por ${this.ultimoUsuario}.`
      : `La película no está alquilada actualmente. Último usuario: ${this.ultimoUsuario}.`;
  },
};

// Función para actualizar la información de la película en la página
function actualizarInformacion() {
  document.getElementById("titulo").innerText = pelicula.titulo;
  document.getElementById("anio").innerText = pelicula.anio;
  document.getElementById("duracion").innerText = pelicula.duracion;
  document.getElementById("precio").innerText =
    pelicula.precioAlquiler.toFixed(2);
  document.getElementById("alquilada").innerText = pelicula.alquilada;
  document.getElementById("ultimoUsuario").innerText = pelicula.ultimoUsuario;
}

// Función para alquilar la película
function alquilar() {
  const usuario = document.getElementById("usuario").value;
  if (usuario) {
    pelicula.alquilar(usuario);
    actualizarInformacion();
    document.getElementById("message").innerText =
      "La película ha sido alquilada.";
    document.getElementById("usuario").value = "";
  } else {
    document.getElementById("message").innerText =
      "Por favor, ingrese el nombre del usuario.";
  }
}

// Función para devolver la película
function devolver() {
  pelicula.devolver();
  actualizarInformacion();
  document.getElementById("message").innerText =
    "La película ha sido devuelta.";
}

// Función para mostrar el último alquiler
function ultimoAlquiler() {
  const mensaje = pelicula.ultimoAlquiler();
  document.getElementById("message").innerText = mensaje;
}

// Actualizar la información de la película al cargar la página
window.onload = actualizarInformacion;

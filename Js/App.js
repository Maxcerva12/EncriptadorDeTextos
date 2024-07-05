// Selecciona el elemento con la clase .Copiar
const copiarElement = document.querySelector(".Copiar");

document.querySelector(".Encriptador").addEventListener("click", function () {
  const texto = document.getElementById("Texto").value;
  const textoEncriptado = encriptar(texto);
  mostrarMensaje(textoEncriptado);
});

document
  .querySelector(".Desencriptador")
  .addEventListener("click", function () {
    const texto = document.getElementById("Texto").value;
    const textoDesencriptado = desencriptar(texto);
    mostrarMensaje(textoDesencriptado);
  });

function encriptar(texto) {
  const reglas = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  return texto.replace(/[eioua]/g, (letra) => reglas[letra]);
}

function desencriptar(texto) {
  const reglas = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  return texto.replace(/enter|imes|ai|ober|ufat/g, (letra) => reglas[letra]);
}

function mostrarMensaje(mensaje) {
  const mensajeDeSalida = document.getElementById("MensajeDeSalida");
  const placeholderDeSalida = document.querySelector(".placeholderDeSalida");

  mensajeDeSalida.textContent = mensaje;
  mensajeDeSalida.style.display = "block";
  copiarElement.style.display = "block";
  placeholderDeSalida.style.display = "none";
  ajustarAlineacion(mensaje);
}

document.querySelector(".Copiar").addEventListener("click", function () {
  const mensajeDeSalida =
    document.getElementById("MensajeDeSalida").textContent;
  navigator.clipboard.writeText(mensajeDeSalida).then(
    function () {
      alert("Texto copiado al portapapeles");
    },
    function () {
      alert("Error al copiar el texto");
    }
  );
});

// Función para ajustar la alineación basada en la longitud del mensaje
function ajustarAlineacion(mensaje) {
  var cantidadDePalabras = mensaje.split(" ").length;
  var longitudDelMensaje = mensaje.length;

  if (cantidadDePalabras > 39 || longitudDelMensaje > 213) {
    document.querySelector(".SectionDeSalida").style.justifyContent =
      "space-between";
  } else {
    document.querySelector(".SectionDeSalida").style.justifyContent = "center";
  }
}

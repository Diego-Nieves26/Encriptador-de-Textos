const textTagDOM = document.getElementById("camp-text");

const encrypt = () => {
  const text = textTagDOM.value.toLowerCase();

  if (text.length == 0) return;

  const textEncrypt = text
    .replace(/e/gim, "enter")
    .replace(/o/gim, "ober")
    .replace(/i/gim, "imes")
    .replace(/a/gim, "ai")
    .replace(/u/gim, "ufat");

  changeVisibility("no-text", "none");
  changeVisibility("copy-btn", "inherit");
  document.getElementById("img").src = "./img/lleno.png";
  document.getElementById("text-encrypt").innerText = textEncrypt;
};

const decrypt = () => {
  const text = textTagDOM.value.toLowerCase();

  if (text.length == 0) return;

  const textDecrypt = text
    .replace(/enter/gim, "e")
    .replace(/ober/gim, "o")
    .replace(/imes/gim, "i")
    .replace(/ai/gim, "a")
    .replace(/ufat/gim, "u");

  changeVisibility("no-text", "none");
  changeVisibility("copy-btn", "inherit");
  document.getElementById("img").src = "./img/lleno.png";
  document.getElementById("text-encrypt").innerText = textDecrypt;
};

const changeVisibility = (tag, style) => {
  document.getElementsByClassName(tag)[0].style.display = style;
};

function copia() {
  var contenido = document.querySelector("#text-encrypt");
  contenido.select();
  document.execCommand("copy");
  alert("Copiado!");
}

window.addEventListener("DOMContentLoaded", () => {
  changeVisibility("copy-btn", "none");
  document.getElementById("text-encrypt").innerText =
    "Ingresa el texto que desees encriptar o desenciptar.";
});

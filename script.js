const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const criarCarta = document.getElementById('criar-carta');

function newLetters() {
  const arrayCartaTexto = cartaTexto.value.split(' ');
  for (let index = 0; index < arrayCartaTexto.length; index += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerText = arrayCartaTexto[index];
    cartaGerada.appendChild(newSpan);
  }
}

function btnCreateLetter() {
  criarCarta.addEventListener('click', newLetters);
}

function clearLetter() {
  cartaTexto.value = '';
  const numChild = cartaGerada.childElementCount;
  for (let index = (numChild - 1); index >= 0; index -= 1) {
    cartaGerada.removeChild(cartaGerada.childNodes[index]);
  }
}

function focusClearLetter() {
  cartaTexto.addEventListener('focus', clearLetter);
}

window.onload = function startPage() {
  btnCreateLetter();
  focusClearLetter();
};

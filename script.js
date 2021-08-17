const cartaGerada = document.getElementById('carta-gerada');
const cartaTexto = document.getElementById('carta-texto');
const criarCarta = document.getElementById('criar-carta');

criarCarta.addEventListener('click', generateLetter);

function generateLetter() {
  cartaGerada.innerHTML = '';
  const array = cartaTexto.value.split(' ');
  for (let index = 0; index < array.length; index += 1) {
    const word = document.createElement('span');
    word.innerText = array[index];
    cartaGerada.appendChild(word);
  }
}

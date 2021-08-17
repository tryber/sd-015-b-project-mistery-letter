const cartaGerada = document.getElementById('carta-gerada');
const cartaTexto = document.getElementById('carta-texto');
const criarCarta = document.getElementById('criar-carta');

criarCarta.addEventListener('click', generateLetter);

function generateLetter() {
  cartaGerada.innerHTML = '';
  if (cartaTexto.value === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const array = cartaTexto.value.split(' ');
    for (let index = 0; index < array.length; index += 1) {
      const word = document.createElement('span');
      word.innerText = array[index];
      cartaGerada.appendChild(word);
    }
  }
}

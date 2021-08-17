const cartaGerada = document.getElementById('carta-gerada');
const cartaTexto = document.getElementById('carta-texto');
const criarCarta = document.getElementById('criar-carta');
const cartaContador = document.getElementById('carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['ratatelfert', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

let random = [];
let array = [];

function generateRandomStyle() {
  random = [];
  random.push(style[Math.floor(Math.random() * style.length)]);
  random.push(size[Math.floor(Math.random() * size.length)]);
  random.push(rotation[Math.floor(Math.random() * rotation.length)]);
  random.push(inclination[Math.floor(Math.random() * inclination.length)]);
}

function generateLetter() {
  cartaGerada.innerHTML = '';
  if (cartaTexto.value === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    cartaContador.innerHTML = '';
  } else {
    array = cartaTexto.value.split(' ');
    for (let index = 0; index < array.length; index += 1) {
      generateRandomStyle();
      const word = document.createElement('span');
      word.classList.add(random[0], random[1], random[2], random[3]);
      word.innerText = array[index];
      cartaGerada.appendChild(word);
    }
    cartaContador.innerText = array.length;
  }
}

function changeStyle(event) {
  const wordToChange = event;
  generateRandomStyle();
  wordToChange.target.className = '';
  wordToChange.target.classList.add(random[0], random[1], random[2], random[3]);
}

criarCarta.addEventListener('click', generateLetter);
cartaGerada.addEventListener('click', changeStyle);

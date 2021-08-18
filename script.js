const input = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');

function createButton(buttonId, buttonText, insBeforeId) {
  const button = document.createElement('button');
  button.id = buttonId;
  button.innerText = buttonText;
  document.body.insertBefore(button, document.getElementById(insBeforeId));
}

function createLetter(event) {
  const createSpan = document.createElement('span');
  if (input.value === '') {
    return alert ('por favor, digite o conteúdo da carta.')
  }
  createSpan.innerText = input.value;
  cartaGerada.appendChild(createSpan);
}

function createLetterButton () {
  createButton('criar-carta', 'Criar carta!', 'carta-gerada');
  const criarCarta = document.getElementById('criar-carta');
  input.value = '';
  criarCarta.addEventListener('click', createLetter);
}
createLetterButton();
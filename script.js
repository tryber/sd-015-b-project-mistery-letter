const body = document.querySelector('body');
const input = document.querySelector('input');
const cartaGerada = document.getElementById('carta-gerada');

function createButton(buttonId, buttonText, insBeforeId) {
  const button = document.createElement('button');
  button.id = buttonId;
  button.innerText = buttonText;
  document.body.insertBefore(button, document.getElementById(insBeforeId));
}

function getRandomClasses() {
  const styleClasses = ['newspaper', 'magazine1', 'magazine2'];
  const sizeClasses = ['medium', 'big', 'reallybig'];
  const rotationClasses = ['rotateleft', 'rotateright'];
  const skewClasses = ['skewleft', 'skewright'];
  let classList = [];
  for (let count = 0; count < 1; count += 1) {
    classList += styleClasses[Math.floor(Math.random() * styleClasses.length)];
    classList += ' ' + sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
  }
  for (let count = 0; count < 1; count += 1) {
    classList += ' ' + rotationClasses[Math.floor(Math.random() * rotationClasses.length)];
    classList += ' ' + skewClasses[Math.floor(Math.random() * skewClasses.length)];
  }
  return classList;
}

function createLetter() {
  if (input.value === '' || input.value < ' ') {
    return alert('por favor, digite o conteúdo da carta.');
  }
  const space = ' ';
  const words = input.value.split(space);
  for (let word = 0; word < words.length; word += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerText = words[word] + ' ';
    createSpan.className = getRandomClasses();
    cartaGerada.appendChild(createSpan);
  }
}

function createLetterButton() {
  createButton('criar-carta', 'Criar carta!', 'carta-gerada');
  const criarCarta = document.getElementById('criar-carta');
  input.value = '';
  criarCarta.addEventListener('click', createLetter);
  input.addEventListener('keypress', checkEnterPressed);
}
createLetterButton();

function checkEnterPressed(event) {
  if (event.key === 'Enter') {
    createLetter();
  }
}
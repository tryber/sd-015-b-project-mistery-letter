const input = document.querySelector('#carta-texto');
const createBtn = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const classesToAdd = {
  styles: false,
  stylesOptions: 3,
  size: false,
  sizeOptions: 3,
  rotation: false,
  rotationOptions: 2,
  skew: false,
  skewOptions: 2,
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseStyles() {
  const options = classesToAdd.stylesOptions;
  const styleNumber = getRandomNumber(1, options);

  switch (styleNumber) {
  case 1:
    return 'newspaper';
  case 2:
    return 'magazine1';
  case 3:
    return 'magazine2';
  default:
    return 'invalidStyle';
  }
}

function chooseSize() {
  const options = classesToAdd.sizeOptions;
  const sizeNumber = getRandomNumber(1, options);
  switch (sizeNumber) {
  case 1:
    return 'medium';
  case 2:
    return 'big';
  case 3:
    return 'reallybig';
  default:
    return 'invalidSize';
  }
}

function chooseRotation() {
  const options = classesToAdd.rotationOptions;
  const rotationNumber = getRandomNumber(1, options);
  switch (rotationNumber) {
  case 1:
    return 'rotateleft';
  case 2:
    return 'rotateright';
  default:
    return 'invalidRotation';
  }
}

function chooseSkew() {
  const options = classesToAdd.skewOptions;
  const skewNumber = getRandomNumber(1, options);
  switch (skewNumber) {
  case 1:
    return 'skewleft';
  case 2:
    return 'skewright';
  default:
    return 'invalidskew';
  }
}

function generateRandomBool() {
  const randomBoolean = Math.random() < 0.5;
  return randomBoolean;
}

function addRandomClasses(span) {
  classesToAdd.styles = generateRandomBool();
  classesToAdd.size = generateRandomBool();
  classesToAdd.rotation = generateRandomBool();
  classesToAdd.skew = generateRandomBool();
  if (classesToAdd.styles) {
    span.classList.add(chooseStyles());
  }
  if (classesToAdd.size) {
    span.classList.add(chooseSize());
  }
  if (classesToAdd.rotation) {
    span.classList.add(chooseRotation());
  }
  if (classesToAdd.skew) {
    span.classList.add(chooseSkew());
  }
}

function createCarta(text) {
  const words = text.split(' ');
  for (let index = 0; index < words.length; index += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerText = words[index];
    addRandomClasses(newSpan);
    cartaGerada.appendChild(newSpan);
  }
}

function handleCreateBtn() {
  const text = input.value;
  cartaGerada.innerHTML = '';
  if (text.trim().length > 0) {
    createCarta(text);
  } else {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function load() {
  createBtn.addEventListener('click', handleCreateBtn);
}

load();

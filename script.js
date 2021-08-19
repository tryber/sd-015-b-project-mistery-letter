// utils
function randomNumberGenerator(limit) {
  const number = (Math.random() * limit);
  const roundNumber = Math.round(number);
  return roundNumber;
}

function addEventListenerToArray(array, event, func) {
  for (const element of array) {
    element.addEventListener(event, func);
  }
}

function checkIfHasLetter(letterContainer) {
  const createdLetter = document.querySelector('#carta-gerada span');
  if (createdLetter) {
    letterContainer.innerHTML = '';
  }
}

function generateLetterElements(letterText, letterContainer) {
  for (const word of letterText) {
    const letterElement = document.createElement('span');
    letterElement.innerText = word;
    letterContainer.appendChild(letterElement);
  }
}

function checkInputEmpty(inputElement, letterContainer) {
  const inputText = inputElement.value.split(' ');
  if (inputText.join('')) {
    letterContainer.innerHTML = '';
    return inputText;
  }
  letterContainer.innerText = 'Por favor, digite o conteúdo da carta.';
}

function generateStyleClassList() {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const skewGroup = ['skewleft', 'skewright'];
  const groupList = [styleGroup, sizeGroup, rotationGroup, skewGroup];
  const styleClassList = [];
  for (let group of groupList) {
    randomClassNumber = randomNumberGenerator(group.length);
    if (randomClassNumber) {
      styleClassList.push(group[randomClassNumber - 1]);
      group = group.slice(randomClassNumber - 1);
    }
  }
  return styleClassList;
}

function resetElementClass(element) {
  element.className = '';
}

function addRandomClassToSingleElement(event) {
  const element = event.target;
  resetElementClass(element);
  const styleClassList = generateStyleClassList();
  for (const styleClass of styleClassList) {
    element.classList.add(styleClass);
  }
}

function letterWordCounter(wordslist) {
  wordCounter = document.getElementById('carta-contador');
  wordCounter.innerText = wordslist.length;
}

function addRandomClassToElements() {
  const wordsList = document.querySelectorAll('#carta-gerada span');
  letterWordCounter(wordsList);
  for (const word of wordsList) {
    word.addEventListener('click', addRandomClassToSingleElement);
    const styleClassList = generateStyleClassList();
    for (const styleClass of styleClassList) {
      word.classList.add(styleClass);
    }
  }
}

function generateLetter() {
  const letterContainer = document.getElementById('carta-gerada');
  const inputElement = document.getElementById('carta-texto');
  const letterText = checkInputEmpty(inputElement, letterContainer);
  if (letterText) {
    checkIfHasLetter(letterContainer);
    generateLetterElements(letterText, letterContainer);
    addRandomClassToElements();
  }
}

function addEventListeners() {
  const generateLetterButton = document.getElementById('criar-carta');
  generateLetterButton.addEventListener('click', generateLetter);
}

window.onload = function () {
  addEventListeners();
};

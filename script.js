// consts
const inputText = document.getElementById('carta-texto');
const letterPhrase = document.getElementById('carta-gerada');
const buttonToGenerateLetter = document.getElementById('criar-carta');
const contWordsText = document.getElementById('carta-contador');
const styleClasses = ['newspaper', 'magazine1', 'magazine2'];
const sizeClasses = ['medium', 'big', 'reallybig'];
const rotateClasses = ['rotateleft', 'rotateright'];
const skewClasses = ['skewleft', 'skewright'];

// function to delete all elements of p
function deletePChilds() {
  letterPhrase.innerText = '';
  const childs = letterPhrase.children;
  for (let i = 0; i < childs.length; i += 1) {
    childs[i].remove();
  }
}

// function to generate integer random number in range [0, max]
function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

// select one random of arrayClasses and push to array
function selectRandomElement(array, arrayClasses) {
  const aux = array;
  const numElements = arrayClasses.length;
  const randomIndex = randomInteger(numElements);
  if (randomIndex <= numElements - 1) {
    aux.push(arrayClasses[randomIndex]);
  }
  return aux;
}

// function to return an classList with 4 or less random classes
function randomClassList() {
  let aux = [];
  aux = selectRandomElement(aux, styleClasses);
  aux = selectRandomElement(aux, sizeClasses);
  aux = selectRandomElement(aux, skewClasses);
  aux = selectRandomElement(aux, rotateClasses);
  return aux.join(' ');
}

// function to create span for any word in input id carta-texto
function createSpanForInputWords() {
  deletePChilds();
  const phrase = inputText.value;
  if (phrase.trim() !== '') {
    const phraseArray = phrase.trim().split(' ');
    for (let i = 0; i < phraseArray.length; i += 1) {
      const wordToSpan = document.createElement('span');
      wordToSpan.innerText = phraseArray[i];
      wordToSpan.className = randomClassList();
      letterPhrase.appendChild(wordToSpan);
    }
    contWordsText.innerText = letterPhrase.children.length;
  } else {
    letterPhrase.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

// addEventListener to buttonToGenerateLetter
buttonToGenerateLetter.addEventListener('click', createSpanForInputWords);

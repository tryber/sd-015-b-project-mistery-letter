const letterContainer = document.getElementById('carta-gerada');
const letterText = document.getElementById('carta-texto');
const letterBtn = document.getElementById('criar-carta');
const wordCounter = document.getElementById('carta-contador');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function oneOfThreeClasses() {
  const rdm = Math.floor(Math.random() * 3);
  return rdm;
}

function oneOfTwoClasses() {
  const rdm = Math.floor(Math.random() * 2);
  return rdm;
}

function addClasses() {
  const wordList = document.getElementsByTagName('span');
  wordCounter.innerText = wordList.length;
  for (let i = 0; i < wordList.length; i += 1) {
    const newClass1 = style[oneOfThreeClasses()];
    const newClass2 = size[oneOfThreeClasses()];
    const newClass3 = rotation[oneOfTwoClasses()];
    const newClass4 = skew[oneOfTwoClasses()];
    wordList[i].classList.add(newClass1);
    wordList[i].classList.add(newClass2);
    wordList[i].classList.add(newClass3);
    wordList[i].classList.add(newClass4);
  }
}

function generateLetter() {
  if (letterText.value.trim() === '') {
    letterContainer.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    letterContainer.innerHTML = '';
    const letterWords = letterText.value.split(' ');
    for (let i = 0; i < letterWords.length; i += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = `${letterWords[i]}`;
      letterContainer.appendChild(newSpan);
    }
  }
  addClasses();
}

letterBtn.addEventListener('click', generateLetter);

const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const criarCarta = document.getElementById('criar-carta');
const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
const groupHeight = ['medium', 'big', 'reallybig'];
const groupRotation = ['rotateleft', 'rotateright'];
const groupInclination = ['skewleft', 'skewright'];

function splitLetter(myLetter) {
  const arrayCartaTexto = myLetter.split(' ');
  const arrayValid = [];
  for (let index = 0; index < arrayCartaTexto.length; index += 1) {
    if (arrayCartaTexto[index] !== '') {
      arrayValid.push(arrayCartaTexto[index]);
    }
  }
  return arrayValid;
}

function randomNumberStyle(num) {
  let numberStyle = Math.floor((Math.random()) * num);
  if (numberStyle === num) {
    numberStyle = num - 1;
  }
  return numberStyle;
}

function randomClassStyle() {
  let newSpanClass = groupStyle[randomNumberStyle(3)];
  newSpanClass += ' ';
  newSpanClass += groupHeight[randomNumberStyle(3)];
  newSpanClass += ' ';
  newSpanClass += groupRotation[randomNumberStyle(2)];
  newSpanClass += ' ';
  newSpanClass += groupInclination[randomNumberStyle(2)];
  return newSpanClass;
}

function newLetters() {
  const arrayCartaTexto = splitLetter(cartaTexto.value);
  console.log(arrayCartaTexto.length);
  if (arrayCartaTexto.length === 0) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < arrayCartaTexto.length; index += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = arrayCartaTexto[index];
      newSpan.className = randomClassStyle();
      cartaGerada.appendChild(newSpan);
    }
  }
}

function btnCreateLetter() {
  criarCarta.addEventListener('click', newLetters);
}

function clearLetter() {
  cartaTexto.value = '';
  cartaGerada.innerText = '';
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

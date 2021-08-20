const textLetter = document.getElementById('carta-gerada');
const buttonLetter = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const selectSpan = document.querySelectorAll('span');
const classStyle = ['newspaper', 'magazine1', 'magazine2'];
const classSize = ['medium', 'big', 'reallybig'];
const classRot = ['rotateleft', 'rotateright'];
const classSkew = ['skewleft', 'kewright'];
const count = document.getElementById('carta-contador');

function correctSpan() {
  if (selectSpan) {
    for (let i = 0; i < selectSpan.length; i += 1) {
      selectSpan[i].remove();
    }
  }
}

function generateClassString() {
  const vector = [];
  let classList = '';
  for (let i = 0; i < 4; i += 1) {
    if (vector.length < 2) {
      vector.push(Math.floor(Math.random() * 3));
    } else {
      vector.push(Math.floor(Math.random() * 2));
    }
  }

  classList = `${classStyle[vector[0]]} `;
  classList = `${classList + classSize[vector[1]]} `;
  classList = `${classList + classRot[vector[2]]} `;
  classList += classSkew[vector[3]];
  return classList;
}

function createLetter() {
  correctSpan();
  if (input.value === ' '.repeat(input.value.length)) {
    textLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    textLetter.innerText = ' ';
    const stringLetter = input.value.split(' ');
    for (let i = 0; i < stringLetter.length; i += 1) {
      const span = document.createElement('span');
      const classAdd = generateClassString();
      span.className = classAdd;
      span.innerText = stringLetter[i];
      textLetter.appendChild(span);
    }
  }
  count.innerText = document.querySelectorAll('span').length;
}

buttonLetter.addEventListener('click', createLetter);
count.innerText = document.querySelectorAll('span').length;

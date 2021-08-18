const textLetter = document.getElementById('carta-gerada');
const buttonLetter = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const selectSpan = document.querySelectorAll('span');

function correctSpan() {
  if (selectSpan) {
    for (let i = 0; i < selectSpan.length; i += 1) {
      selectSpan[i].remove();
    }
  }
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
      span.innerText = stringLetter[i];
      textLetter.appendChild(span);
    }
  }
}

buttonLetter.addEventListener('click', createLetter);

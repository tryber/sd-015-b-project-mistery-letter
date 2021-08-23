const letterContainer = document.getElementById('carta-gerada');
const letterText = document.getElementById('carta-texto');
const letterBtn = document.getElementById('criar-carta');

function generateLetter() {
  letterContainer.innerHTML = '';
  const letterWords = letterText.value.split(' ');
  for (let i = 0; i < letterWords.length; i += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerText = `${letterWords[i]}`;
    letterContainer.appendChild(newSpan);
  }
}

letterBtn.addEventListener('click', generateLetter);

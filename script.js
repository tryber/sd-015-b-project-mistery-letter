// consts
const inputText = document.getElementById('carta-texto');
const letterPhrase = document.getElementById('carta-gerada');
const buttonToGenerateLetter = document.getElementById('criar-carta');

// function to delete all elements of p
function deletePChilds() {
  letterPhrase.innerText = '';
  const childs = letterPhrase.children;
  for (let i = 0; i < childs.length; i += 1) {
    childs[i].remove();
  }
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
      letterPhrase.appendChild(wordToSpan);
    }
  } else {
    letterPhrase.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

// addEventListener to buttonToGenerateLetter
buttonToGenerateLetter.addEventListener('click', createSpanForInputWords);

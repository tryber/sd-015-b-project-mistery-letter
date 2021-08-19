// consts
const inputText = document.getElementById('carta-texto');
const letterPhrase = document.getElementById('carta-gerada');
const buttonToGenerateLetter = document.getElementById('criar-carta');

// function to create span for any word in input id carta-texto
function createSpanForInputWords() {
  const phrase = inputText.value;
  let phraseArray = phrase.split(' ');
  for (let i of phraseArray) {
    const wordToSpan = document.createElement('span');
    wordToSpan.innerText = i;
    letterPhrase.appendChild(wordToSpan);
  }
}

// addEventListener to buttonToGenerateLetter
buttonToGenerateLetter.addEventListener('click', createSpanForInputWords);

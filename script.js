//utils

function checkIfHasLetter(letterContainer) {
  const createdLetter = document.getElementsByClassName = "letter-word";
  if (createdLetter) {
    letterContainer.innerHTML = "";
  }
}

function generateLetterElements(letterText, letterContainer) {
  for (let word of letterText) {
    let letterElement = document.createElement("span");
    letterElement.className = "letter-word";
    letterElement.innerText = word;
    letterContainer.appendChild(letterElement);
  }
}

function checkInputEmpty(inputElement, letterContainer) {
  const inputText = inputElement.value.split(' ');
  if (inputText.join('')) {
    letterContainer.innerHTML = "";
    return inputText;
  } else {
    letterContainer.innerText = "Por favor, digite o conteúdo da carta.";
  }
}

function generateLetter() {
  const letterContainer = document.getElementById("carta-gerada");
  const inputElement = document.getElementById("carta-texto");
  const letterText = checkInputEmpty(inputElement, letterContainer);
  if (letterText) {
    checkIfHasLetter(letterContainer);
    generateLetterElements(letterText, letterContainer);
  }
}

function addEventListeners() {
  const generateLetterButton = document.getElementById("criar-carta");
  generateLetterButton.addEventListener("click", generateLetter);
}

window.onload = function () {
  addEventListeners();
}
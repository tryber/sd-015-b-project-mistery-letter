//utils

function generateLetter() {
  const letterContainer = document.getElementById("carta-gerada");
  const createdLetter = document.getElementsByClassName = "letter-word";
  if (createdLetter) {
    letterContainer.innerHTML = "";
  }
  const inputElement = document.getElementById("carta-texto");
  const letterText = inputElement.value.split(" ");
  for (let word of letterText) {
    let letterElement = document.createElement("span");
    letterElement.className = "letter-word"
    letterElement.innerText = word;
    letterContainer.appendChild(letterElement);
  }
}

function addEventListeners() {
  const generateLetterButton = document.getElementById("criar-carta");
  generateLetterButton.addEventListener("click", generateLetter);
}

window.onload = function () {
  addEventListeners();
}
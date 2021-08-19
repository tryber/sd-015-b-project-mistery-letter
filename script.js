//utils
function randomNumberGenerator(limit) {
  const number = (Math.random() * limit);
  const roundNumber = Math.round(number);
  return roundNumber;
}

function addEventListenerToArray(array, event, func) {
  for (let element of array) {
    element.addEventListener(event, func);
  }
}

function checkIfHasLetter(letterContainer) {
  const createdLetter = document.querySelector("#carta-gerada span");
  if (createdLetter) {
    letterContainer.innerHTML = "";
  }
}

function generateLetterElements(letterText, letterContainer) {
  for (let word of letterText) {
    let letterElement = document.createElement("span");
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

function generateStyleClassList() {
  let styleGroup = ["newspaper", "magazine1", "magazine2"];
  let sizeGroup = ["medium", "big", "reallybig"];
  let rotationGroup = ["rotateleft", "rotateright"];
  let skewGroup = ["skewleft", "skewright"];
  let groupList = [styleGroup, sizeGroup, rotationGroup, skewGroup];
  let styleClassList = [];
  for (let group of groupList) {
    randomClassNumber = randomNumberGenerator(group.length)
    if (randomClassNumber) {
      styleClassList.push(group[randomClassNumber - 1])
      group = group.slice(randomClassNumber - 1)
    }
  }
  return styleClassList
}

function addClassToElements() {
  let wordsList = document.querySelectorAll("#carta-gerada span");
  for (let word of wordsList) {
    let styleClassList = generateStyleClassList();
    for (let styleClass of styleClassList) {
      word.classList.add(styleClass);
    }
  }
}

function resetLetterClasses() {
  let wordsList = document.querySelectorAll("#carta-gerada span");
  for (word of wordsList) {
    word.className = ""
  }
  addClassToElements()
}

function generateLetter() {
  const letterContainer = document.getElementById("carta-gerada");
  const inputElement = document.getElementById("carta-texto");
  const letterText = checkInputEmpty(inputElement, letterContainer);
  if (letterText) {
    checkIfHasLetter(letterContainer);
    generateLetterElements(letterText, letterContainer);
    addClassToElements();
  }
}

function addEventListeners() {
  const generateLetterButton = document.getElementById("criar-carta");
  generateLetterButton.addEventListener("click", generateLetter);
  const letter = document.getElementById("carta-gerada");
  letter.addEventListener("click", resetLetterClasses);

}

window.onload = function() {
  addEventListeners();
}
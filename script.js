function createButton(buttonId, buttonText, insBeforeId) {
  const button = document.createElement('button');
  button.id = buttonId;
  button.innerText = buttonText;
  document.body.insertBefore(button, document.getElementById(insBeforeId));
}

function createLetterButton () {
  createButton('criar-carta', 'Criar carta!', 'carta-gerada');
}
createLetterButton();
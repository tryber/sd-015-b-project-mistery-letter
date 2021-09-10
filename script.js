// create tags
const body = document.querySelector('.body');
const main = document.createElement('main');
main.classList = 'main';
body.appendChild(main);

const createInText = document.createElement('input');
createInText.id = 'carta-texto';
main.appendChild(createInText);

const paragraph = document.createElement('p');
paragraph.id = 'carta-gerada';
main.appendChild(paragraph);

const buttonCard = document.createElement('button');
buttonCard.id = 'criar-carta';
buttonCard.innerText = 'Criar Carta';
main.appendChild(buttonCard);

// get elements
const getButtonCard = document.querySelector('#criar-carta');
const getInText = document.querySelector('#carta-texto');
const getParagraph = document.querySelector('#carta-gerada');

let phrase = [];

function createParagraph() {
  getParagraph.innerHTML = '';
  const valueInput = getInText.value;

  if (/\S/.test(valueInput)) {
    phrase = valueInput.split(' ');

    for (let i = 0; i < phrase.length; i += 1) {
      const createSpan = document.createElement('span');
      getParagraph.appendChild(createSpan);
      createSpan.innerHTML = phrase[i];
    }
  }
}

getButtonCard.addEventListener('click', createParagraph);

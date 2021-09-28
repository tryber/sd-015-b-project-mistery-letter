const createButton = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const letterResult = document.getElementById('carta-gerada')

const getInput = () => {
  letterResult.innerHTML = '';
   const textValue = input.value.split(' ');
   textValue.forEach((word) => {
     const span = document.createElement('span');
     span.innerText = word;
     letterResult.appendChild(span);
   });
 }
createButton.addEventListener('click', getInput);
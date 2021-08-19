const paragrafo = document.getElementById('carta-gerada');

function removeSpan() {
  paragrafo.innerText = '';
  for (let index = 0; index < paragrafo.children.length; index += 1) {
    paragrafo.children[0].remove();
  }
}

function generateMail() {
  removeSpan();
  const carta = document.getElementById('carta-texto');
  const msg = carta.value;
  const msgSeparada = msg.split(' ');

  if (carta.value) {
    for (let index = 0; index < msgSeparada.length; index += 1) {
      const palavra = document.createElement('span');

      palavra.innerText = msgSeparada[index];
      paragrafo.appendChild(palavra);
    }
  } else {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

const buttonGenerateMail = document.getElementById('criar-carta');
buttonGenerateMail.addEventListener('click', generateMail);

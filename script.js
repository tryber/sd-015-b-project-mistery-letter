const tagSpanPai = document.getElementById('carta-gerada');

function geraCartaNucleo(textoSeparado) {
  for (let i = 0; i < textoSeparado.length; i += 1) {
    const tagSpan = document.createElement('span');
    tagSpan.innerText = textoSeparado[i];
    tagSpanPai.appendChild(tagSpan);
  }
}
function geraCarta(textoSeparado) {
  const tagSpanExistente = document.getElementsByTagName('span');

  if (tagSpanExistente.length === 0) {
    geraCartaNucleo(textoSeparado);
  }

  for (let i = 0; i < textoSeparado.length; i += 1) {
    if (textoSeparado[i] !== tagSpanExistente[i].innerText) {
      geraCartaNucleo(textoSeparado);
    }
  }
}

function criaCartaMisteriosa() {
  const texto = document.getElementById('carta-texto');
  const textoSeparado = texto.value.split(' ');
  const elementoP = document.getElementById('carta-gerada');

  if ((texto.value === '') || (texto.value === ' ')) {
    elementoP.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    elementoP.innerText = '';
    geraCarta(textoSeparado);
  }
}

function clicarBotaoGerar() {
  const botaoGerar = document.getElementById('criar-carta');
  botaoGerar.addEventListener('click', criaCartaMisteriosa);
}

window.onload = () => {
  clicarBotaoGerar();
};

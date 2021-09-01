const tagSpanPai = document.getElementById('carta-gerada');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];

// Gera número inteiro aleatório
// De https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(max) {
  const maximo = Math.floor(max);
  return Math.floor(Math.random() * (maximo + 1));
}

function geraCartaNucleo(textoSeparado, i) {
  const tagSpan = document.createElement('span');
  tagSpan.innerText = textoSeparado[i];
  const estilo = grupoEstilo[getRandomIntInclusive(grupoEstilo.length - 1)];
  tagSpan.classList.add(estilo);
  const tamanho = grupoTamanho[getRandomIntInclusive(grupoTamanho.length - 1)];
  tagSpan.classList.add(tamanho);
  const rotacao = grupoRotacao[getRandomIntInclusive(grupoRotacao.length - 1)];
  tagSpan.classList.add(rotacao);
  const inclinacao = grupoInclinacao[getRandomIntInclusive(grupoInclinacao.length - 1)];
  tagSpan.classList.add(inclinacao);
  tagSpanPai.appendChild(tagSpan);
}
function geraCarta(textoSeparado) {
  for (let i = 0; i < textoSeparado.length; i += 1) {
    geraCartaNucleo(textoSeparado, i);
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

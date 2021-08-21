const input = document.getElementById('carta-texto');
const btnCriarCarta = document.getElementById('criar-carta');
const paragrafoResultado = document.getElementById('carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function randomNumber(value) {
  const result = Math.floor(Math.random() * (value + 1));
  return result;
}

function contadorDePalavras(arr) {
  const contador = arr.length;
  const p = document.getElementById('carta-contador');
  p.innerText = contador;
}

function gerarCarta() {
  paragrafoResultado.innerHTML = '';
  const textoInserido = input.value.split(' ');

  textoInserido.forEach((palavra) => {
    const estiloAleatorio = estilo[randomNumber(2)];
    const tamanhoAleatorio = tamanho[randomNumber(2)];
    const rotacaoAleatoria = rotacao[randomNumber(1)];
    const inclinacaoAleatoria = inclinacao[randomNumber(1)];
    const span = document.createElement('span');
    span.innerText = palavra;
    span.classList.add(estiloAleatorio);
    span.classList.add(tamanhoAleatorio);
    span.classList.add(rotacaoAleatoria);
    span.classList.add(inclinacaoAleatoria);
    paragrafoResultado.appendChild(span);
  });

  contadorDePalavras(textoInserido);
}

function verificarValorInserido() {
  const inputSemEspacos = input.value.replace(/( )+/g, '');

  if (inputSemEspacos === '') {
    paragrafoResultado.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    gerarCarta();
  }
}

btnCriarCarta.addEventListener('click', verificarValorInserido);

console.log(`
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!          !!        !!   !!!!    !       !!!!        !!!
!!!....  ....!!  .::.   !!.  :!   !:!  .!!!  !!!   !!!!!!!!
!!!!!!:  :!!!!!  .!!.  !!!!!     !!!!        !!!       !!!!
!!!!!!:  :!!!!!        !!!!!!   !!!!!  .!!!  !!!   !!!!!!!!
!!!!!!:  :!!!!!  .!!!.  !!!!!   !!!!!      .!!!!        !!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
`);

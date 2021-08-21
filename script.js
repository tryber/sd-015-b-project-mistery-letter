const input = document.getElementById('carta-texto');
const btnCriarCarta = document.getElementById('criar-carta');
const paragrafoResultado = document.getElementById('carta-gerada');

function gerarCarta() {
  paragrafoResultado.innerHTML = '';
  const textoInserido = input.value.split(' ');

  textoInserido.forEach((palavra) => {
    const span = document.createElement('span');
    span.innerText = palavra;
    paragrafoResultado.appendChild(span);
  });
}

btnCriarCarta.addEventListener('click', gerarCarta);

function criaCartaMisteriosa() {
  const texto = document.getElementById('carta-texto');
  const textoSeparado = texto.value.split(' ');
  for (let i = 0; i < textoSeparado.length; i += 1) {
    const tagSpan = document.createElement('span');
    const tagSpanPai = document.getElementById('carta-gerada');
    tagSpan.innerText = textoSeparado[i];
    tagSpanPai.appendChild(tagSpan);
  }
}

function clicarBotaoGerar() {
  const botaoGerar = document.getElementById('criar-carta');
  botaoGerar.addEventListener('click', criaCartaMisteriosa);
}

window.onload = () => {
  clicarBotaoGerar();
};

function fuja(){
    var botaonao = document.getElementById("nao");

    var largurajanela = window.innerWidth;
    var alturajanela = window.innerHeight;

    var maxX = largurajanela - botaonao.offsetWidth;
    var maxY = alturajanela - botaonao.offsetHeight;

    var aleatorioX = Math.max(0, Math.min(Math.floor(Math.random() * maxX), maxX));
    var aleatorioY = Math.max(0, Math.min(Math.floor(Math.random() * maxY), maxY));

    botaonao.style.left = aleatorioX + "px";
    botaonao.style.top = aleatorioY + "px";
}

const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog")

button.onclick = function () {
    modal.showModal()
}
buttonClose.onclick = function () {
    modal.close()
}

// Função para iniciar a contagem regressiva
function startCountdown() {
    var countdownElement = document.getElementById('countdown');
    var contentElement = document.getElementById('content');
    var count = 9;
    
    var countdownInterval = setInterval(function() {
      countdownElement.textContent = count;
      count--;

      if (count < 0) {
        clearInterval(countdownInterval); // Para a contagem regressiva
        countdownElement.style.display = 'none'; // Esconde o contador
        contentElement.style.display = 'block'; // Mostra o conteúdo
      }
    }, 1000); // Atualiza a cada segundo
  }

  // Inicia a contagem regressiva quando a página carrega
  window.onload = startCountdown;
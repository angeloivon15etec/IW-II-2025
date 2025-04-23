const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const estadoTexto = document.getElementById("estado");

let ligada = false;

function atualizarEstado() {
  if (ligada) {
    lampada.src = "img/lampada-ligada.png";
    lampada.alt = "Lâmpada Ligada";
    estadoTexto.innerText = "A lâmpada está ligada.";
    btnLigar.disabled = true;
    btnDesligar.disabled = false;
  } else {
    lampada.src = "img/lampada-desligada.png";
    lampada.alt = "Lâmpada Desligada";
    estadoTexto.innerText = "A lâmpada está desligada.";
    btnLigar.disabled = false;
    btnDesligar.disabled = true;
  }
}

function ligarLampada() {
  ligada = true;
  atualizarEstado();
}

function desligarLampada() {
  ligada = false;
  atualizarEstado();
}

btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);

lampada.addEventListener("mouseover", ligarLampada);
lampada.addEventListener("mouseout", desligarLampada);

atualizarEstado();

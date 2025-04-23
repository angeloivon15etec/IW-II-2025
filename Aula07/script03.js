const imagem = document.getElementById("minhaImagem");
const botao = document.getElementById("trocarImagem");

let imagemAtual = 1;

function trocarImagem() {
  if (imagemAtual === 1) {
    imagem.src = "img/pngtree-duck-poultry-white-transparent-png-image_6653169.png";
    imagemAtual = 2;
  } else {
    imagem.src = "img/pngtree-caring-for-hens-essential-tips-healthy-and-happy-chickens-png-image_13402671.png";
    imagemAtual = 1;
  }
}

botao.addEventListener("click", trocarImagem);

  
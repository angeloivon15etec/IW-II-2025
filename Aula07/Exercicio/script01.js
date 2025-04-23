function trocarImagem(clicada) {
    const imagemPrincipal = document.getElementById('firstimage');
  
    const tempSrc = imagemPrincipal.src;
    imagemPrincipal.src = clicada.src;
    clicada.src = tempSrc;
  }
  

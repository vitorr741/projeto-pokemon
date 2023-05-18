const botaoAlterarTempo = document.getElementById("botao-alterar-tempo");

const body = document.querySelector("body")

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao")

botaoAlterarTempo.addEventListener("click", () => {
  

const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png")
    }
})

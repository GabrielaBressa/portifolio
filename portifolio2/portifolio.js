// Função para exibir uma mensagem no console
function exibirMensagem() {
    console.log("Bem-vindo ao portfólio de Gabriela Bressa! Explore meus projetos.");
}

// Função para mudar a cor de fundo ao clicar no título
function mudarCorDeFundo() {
    document.body.style.backgroundColor = "#a2dff7"; // Mudando a cor de fundo para um tom azul claro
}

// Função para alterar o estilo do botão ao passar o mouse
function alterarEstiloBotao(botao) {
    botao.style.backgroundColor = "#4CAF50";
    botao.style.color = "white";
}

// Função para restaurar o estilo original do botão
function restaurarEstiloBotao(botao) {
    botao.style.backgroundColor = "";
    botao.style.color = "";
}

// Quando a página carrega, exibe a mensagem no console
window.onload = exibirMensagem;

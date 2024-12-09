
function exibirMensagem() {
    console.log("Bem-vindo ao portfólio de Gabriela Bressa! Explore meus projetos.");
}

function mudarCorDeFundo() {
    document.body.style.backgroundColor = "#a2dff7"; 
}

function alterarEstiloBotao(botao) {
    botao.style.backgroundColor = "#4CAF50";
    botao.style.color = "white";
}

function restaurarEstiloBotao(botao) {
    botao.style.backgroundColor = "";
    botao.style.color = "";
}

window.onload = exibirMensagem;

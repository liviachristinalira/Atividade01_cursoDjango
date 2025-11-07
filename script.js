function mostrarMensagem() {
    const msg = document.getElementById('mensagem');
    msg.textContent = "Você clicou no botão! 🎉";
}

function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const resposta = document.getElementById('resposta');
    resposta.textContent = `Obrigado pelo contato, ${nome}! Entraremos em breve.`;
}

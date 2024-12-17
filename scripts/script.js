window.addEventListener('load', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (usuarioLogado && usuarioLogado.nome) {
        document.getElementById('perfilNome').textContent = usuarioLogado.nome;
    }
});
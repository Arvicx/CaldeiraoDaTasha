window.addEventListener('load', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (usuarioLogado && usuarioLogado.nome) {
        document.getElementById('perfilNome').textContent = usuarioLogado.nome;
    }
});

function deslogarUsuario() {
    localStorage.removeItem('usuarioLogado'); // Remove os dados do usuário logado
    alert('Você foi deslogado com sucesso!');
    location.reload()
}
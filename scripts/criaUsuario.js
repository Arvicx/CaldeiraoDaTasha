// Verificar o Local Storage ao carregar a página
window.addEventListener('load', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (usuarioLogado) {
        var opcoes = document.querySelectorAll('.opcaoLink');

        opcoes.forEach(element => {
            element.style.display = 'block'
        });
    }
});

let usuarioCadastrado = JSON.parse(localStorage.getItem('usuarioCadastrado')) || null; // Carrega usuário salvo

// Script de criação de usuário
document.getElementById('usuarioForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    let isValid = true;

    // Validação do nome
    if (!nome) {
        document.getElementById('nomeError').textContent = "O nome não pode estar vazio.";
        isValid = false;
    } else {
        document.getElementById('nomeError').textContent = "";
    }

    // Validação do email
    const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Formato de email inválido.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Validação da senha
    if (senha.length < 6) {
        document.getElementById('senhaError').textContent = "A senha deve ter pelo menos 6 caracteres.";
        isValid = false;
    } else {
        document.getElementById('senhaError').textContent = "";
    }

    if (isValid) {
        usuarioCadastrado = {
            nome: nome,
            email: email,
            senha: senha
        };
        localStorage.setItem('usuarioCadastrado', JSON.stringify(usuarioCadastrado));
        alert("Usuário criado com sucesso!");

        // Resetar o formulário
        document.getElementById('usuarioForm').reset();
    }
});

// Script de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginSenha = document.getElementById('loginSenha').value;

    // Validação do login
    if (usuarioCadastrado && loginEmail === usuarioCadastrado.email && loginSenha === usuarioCadastrado.senha) {
        alert(`Bem-vindo, ${usuarioCadastrado.nome}! Login realizado com sucesso.`);
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioCadastrado));

        var opcoes = document.querySelectorAll('.opcaoLink');

        opcoes.forEach(element => {
            element.style.display = 'none'
        });

        location.reload()
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }

    // Resetar o formulário de login
    document.getElementById('loginForm').reset();
});

function deslogarUsuario() {
    localStorage.removeItem('usuarioLogado'); // Remove os dados do usuário logado
    alert('Você foi deslogado com sucesso!');
    location.reload()
}
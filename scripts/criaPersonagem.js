var personagem = {}

// Verificar o Local Storage ao carregar a página
window.addEventListener('load', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (usuarioLogado) {
        var opcoes = document.querySelectorAll('.opcaoLink');

        opcoes.forEach(element => {
            element.style.display = 'block'
        });
    }else{
        alert("Você precisa estar logado para criar fichas!")
    }
});

class Personagem {
    constructor(nomePessoa, nomePersonagem, nivel, pontosXP, raca, classe, antecedente, tendencia,descricao,forca,destreza,constituicao,inteligencia,sabedoria,carisma,modForca,modDestreza,modConstituicao,modInteligencia,modSabedoria,modCarisma) {
        this.nomePessoa = nomePessoa;
        this.nomePersonagem = nomePersonagem;
        this.nivel = nivel;
        this.pontosXP = pontosXP;
        this.raca = raca;
        this.classe = classe;
        this.antecedente = antecedente;
        this.tendencia = tendencia;
        this.descricao = descricao;

        this.forca = forca;
        this.modForca = modForca;
        this.destreza = destreza;
        this.modDestreza = modDestreza;
        this.constituicao = constituicao;
        this.modConstituicao = modConstituicao;
        this.inteligencia = inteligencia;
        this.modInteligencia = modInteligencia;
        this.sabedoria = sabedoria;
        this.modSabedoria = modSabedoria;
        this.carisma = carisma;
        this.modCarisma = modCarisma;

        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('personagemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nomePessoa = document.getElementById('nomePessoa').value.trim();
        const nomePersonagem = document.getElementById('nomePersonagem').value.trim();
        const nivel = parseInt(document.getElementById('nivel').value) || 0;
        const pontosXP = parseInt(document.getElementById('pontosXP').value) || 0;
        const raca = document.getElementById('raca').value;
        const classe = document.getElementById('classe').value;
        const antecedente = document.getElementById('antecedente').value;
        const tendencia = document.getElementById('tendencia').value;
        const descricao = document.getElementById('descricao').value.trim();

        if (!nomePessoa || !nomePersonagem || !raca || !classe || !antecedente || !tendencia || !descricao) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        personagem = new Personagem(nomePessoa, nomePersonagem, nivel, pontosXP, raca, classe, antecedente, tendencia, descricao);
        console.log(personagem);

        alert("Personagem cadastrado com sucesso!");
        event.target.reset();
    });
});

function rolarDados6x() {
    const resultadosFinais = [];

    for (let i = 0; i < 6; i++) {
        // Rola 4 dados de 6 lados
        const dados = [];
        for (let j = 0; j < 4; j++) {
            dados.push(Math.floor(Math.random() * 6) + 1);
        }

        // Remove o menor valor
        const menorValor = Math.min(...dados);
        const dadosFiltrados = dados.filter((valor, index) => index !== dados.indexOf(menorValor));

        // Soma os 3 maiores valores e armazena no resultado final
        const soma = dadosFiltrados.reduce((total, num) => total + num, 0);
        resultadosFinais.push({ rolagem: dados, resultado: soma });
    }

    return resultadosFinais;
}

// Função para exibir os resultados no HTML
function exibirResultados() {
    const resultados = rolarDados6x();
    const resultadosDiv = document.getElementById('resultados');

    // Limpa os resultados anteriores
    resultadosDiv.innerHTML = '';

    // Exibe os resultados
    resultados.forEach((roll, index) => {
        resultadosDiv.innerHTML += `<h4>Rolagem ${index + 1}: [${roll.rolagem.join(', ')}] -> Soma: ${roll.resultado}</h4>`;
    });
}

// Adiciona evento ao botão
document.getElementById('rolar').addEventListener('click', exibirResultados);

// Função para limpar os resultados
function limparResultados() {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Remove todo o conteúdo da div
}

// Adiciona evento ao botão "Limpar"
document.getElementById('limpar').addEventListener('click', limparResultados);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('personagemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nomePessoa = document.getElementById('nomePessoa').value.trim();
        const nomePersonagem = document.getElementById('nomePersonagem').value.trim();
        const nivel = parseInt(document.getElementById('nivel').value) || 0;
        const pontosXP = parseInt(document.getElementById('pontosXP').value) || 0;
        const raca = document.getElementById('raca').value;
        const classe = document.getElementById('classe').value;
        const antecedente = document.getElementById('antecedente').value;
        const tendencia = document.getElementById('tendencia').value;
        const descricao = document.getElementById('descricao').value.trim();

        if (!nomePessoa || !nomePersonagem || !raca || !classe || !antecedente || !tendencia || !descricao) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        personagem = new Personagem(nomePessoa, nomePersonagem, nivel, pontosXP, raca, classe, antecedente, tendencia, descricao);
        console.log(personagem);

        alert("Personagem cadastrado com sucesso!");
        event.target.reset();
    });
});
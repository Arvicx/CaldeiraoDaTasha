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
        window.location.href = "perfil.html";
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

        var nomePessoa = document.getElementById('nomePessoa').value.trim();
        sessionStorage.setItem("nomePessoa",nomePessoa)

        var nomePersonagem = document.getElementById('nomePersonagem').value.trim();
        sessionStorage.setItem("nomePersonagem",nomePersonagem)

        var nivel = parseInt(document.getElementById('nivel').value) || 0;
        sessionStorage.setItem("nivel",nivel)

        var pontosXP = parseInt(document.getElementById('pontosXP').value) || 0;
        sessionStorage.setItem("pontosXP",pontosXP)

        var raca = document.getElementById('raca').value;
        sessionStorage.setItem("raca",raca)

        var classe = document.getElementById('classe').value;
        sessionStorage.setItem("classe",classe)

        var antecedente = document.getElementById('antecedente').value;
        sessionStorage.setItem("antecedente",antecedente)

        var tendencia = document.getElementById('tendencia').value;
        sessionStorage.setItem("tendencia",tendencia)

        var descricao = document.getElementById('descricao').value.trim();
        sessionStorage.setItem("descricao",descricao)


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
    var resultados = rolarDados6x();
    var resultadosDiv = document.getElementById('resultados');

    // Limpa os resultados anteriores
    resultadosDiv.innerHTML = '';

    // Exibe os resultados
    resultados.forEach((roll, index) => {
        resultadosDiv.innerHTML += `<h4 class="roll">Rolagem ${index + 1}: [${roll.rolagem.join(', ')}] -> Soma: ${roll.resultado}</h4>`;
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

document.addEventListener("DOMContentLoaded", () => {
    const atributosForm = document.getElementById("atributos");

    // Função para calcular o modificador de atributo
    function calcularModificador(valor) {
        return Math.floor((valor - 10) / 2);
    }

    // Evento de submissão do formulário de atributos
    atributosForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Obter os valores dos atributos
        var forca = parseInt(document.getElementById("forca").value, 10);
        sessionStorage.setItem("forca",forca)

        var destreza = parseInt(document.getElementById("destreza").value, 10);
        sessionStorage.setItem("destreza",destreza)

        var constituicao = parseInt(document.getElementById("constituicao").value, 10);
        sessionStorage.setItem("constituicao",constituicao)

        var inteligencia = parseInt(document.getElementById("inteligencia").value, 10);
        sessionStorage.setItem("inteligencia",inteligencia)

        var sabedoria = parseInt(document.getElementById("sabedoria").value, 10);
        sessionStorage.setItem("sabedoria",sabedoria)
    
        var carisma = parseInt(document.getElementById("carisma").value, 10);
        sessionStorage.setItem("carisma",carisma)

        // Calcular os modificadores
            var modForca = calcularModificador(forca);
            sessionStorage.setItem("modForca",modForca)

            var modDestreza = calcularModificador(destreza);
            sessionStorage.setItem("modDestreza",modDestreza)

            var modConstituicao = calcularModificador(constituicao);
            sessionStorage.setItem("modConstituicao",modConstituicao)

            var modInteligencia = calcularModificador(inteligencia);
            sessionStorage.setItem("modInteligencia",modInteligencia)
            
            var modSabedoria = calcularModificador(sabedoria);
            sessionStorage.setItem("modSabedoria",modSabedoria)

            var modCarisma = calcularModificador(carisma);
            sessionStorage.setItem("modCarisma",modCarisma)

        // Exibir os valores calculados no console (ou salvar em outra variável conforme necessário)
        console.log("Atributos:", { forca, destreza, constituicao, inteligencia, sabedoria, carisma });

        
        console.log("Modificadores:", modForca,modDestreza,modConstituicao,modInteligencia,modSabedoria,modCarisma);
        alert("Atributos Cadastrados!")

        // // Exemplo de exibição dos modificadores na página
        // const resultadosDiv = document.getElementById("resultados");
        // resultadosDiv.innerHTML = `
        //     <p><strong>Modificador de Força:</strong> ${modificadores.forca}</p>
        //     <p><strong>Modificador de Destreza:</strong> ${modificadores.destreza}</p>
        //     <p><strong>Modificador de Constituição:</strong> ${modificadores.constituicao}</p>
        //     <p><strong>Modificador de Inteligência:</strong> ${modificadores.inteligencia}</p>
        //     <p><strong>Modificador de Sabedoria:</strong> ${modificadores.sabedoria}</p>
        //     <p><strong>Modificador de Carisma:</strong> ${modificadores.carisma}</p>
        // `;
    });
});


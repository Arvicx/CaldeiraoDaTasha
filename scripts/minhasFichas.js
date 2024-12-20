window.addEventListener('load', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (usuarioLogado && usuarioLogado.nome) {
        document.getElementById('perfilNome').textContent = usuarioLogado.nome;
    }else{
        window.location.href="/index.html";
    }
});

var nomePessoa = sessionStorage.getItem("nomePessoa");
var nomePersonagem = sessionStorage.getItem("nomePersonagem");
var nivel = sessionStorage.getItem("nivel");
var pontosXP = sessionStorage.getItem("pontosXP");
var raca = sessionStorage.getItem("raca");
var classe = sessionStorage.getItem("classe");
var antecedente = sessionStorage.getItem("antecedente");
var tendencia = sessionStorage.getItem("tendencia");
var descricao = sessionStorage.getItem("descricao");

var forca = sessionStorage.getItem("forca");
var destreza = sessionStorage.getItem("destreza");
var constituicao = sessionStorage.getItem("constituicao");
var inteligencia = sessionStorage.getItem("inteligencia");
var sabedoria = sessionStorage.getItem("sabedoria");
var carisma = sessionStorage.getItem("carisma");

var modForca = sessionStorage.getItem("modForca");
var modDestreza = sessionStorage.getItem("modDestreza");
var modConstituicao = sessionStorage.getItem("modConstituicao");
var modInteligencia = sessionStorage.getItem("modInteligencia");
var modSabedoria = sessionStorage.getItem("modSabedoria");
var modCarisma = sessionStorage.getItem("modCarisma");

document.getElementById('fichas').innerHTML += `
    <div class="ficha">
        <div id="cabecaFicha">
            <h3>Nome do Jogador: ${nomePessoa}</h3>
            <h3>Nome do Personagem:  ${nomePersonagem}</h3>
            <h4>Nível: ${nivel}</h4>
            <h4>Pontos de XP: ${pontosXP}</h4>
        </div>
            <div id="cabecaFicha2">
            <h4>Raça: ${raca}</h4>
            <h4>Classe: ${classe}</h4>
            <h4>Antecedente: ${antecedente}</h4>
            <h4>Tendência: ${tendencia}</h4>
        </div>
        
        <div class="atributos">
            <h4>Força: ${forca}(${modForca})</h4>
            <h4>Destreza: ${destreza}(${modDestreza})</h4>
            <h4>Constituição: ${constituicao}(${modConstituicao})</h4>
            <h4>Inteligência: ${inteligencia}(${modInteligencia})</h4>
            <h4>Sabedoria: ${sabedoria}(${modSabedoria})</h4>
            <h4>Carisma: ${carisma}(${modCarisma})</h4>
        </div>


        <h4>Descrição do Personagem:</h4>
        <h5>${descricao}</h5>


    </div>



`
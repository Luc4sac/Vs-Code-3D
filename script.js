const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você acha a IA perigoso?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você acredita que IA ajuda no seu cotidiano?",
        alternativas:["Alternativa 1","Alternativa 2"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.arrependChild(botaoAlternativas)
    }
}
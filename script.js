function mostrarPilares() {
    let lista = document.getElementById('listaPilares');
    lista.style.display = (lista.style.display === 'none') ? 'block' : 'none';
}

const perguntas = [
    "Você frequentemente se auto-sabota em momentos decisivos?",
    "Tem dificuldade em confiar no seu próprio potencial?",
    "Sente medo de falhar ao tentar algo novo?"
];
let indicePergunta = 0;
let pontuacao = 0;

function iniciarTeste() {
    if (indicePergunta < perguntas.length) {
        document.getElementById('teste').innerHTML = `<p class='question'>${perguntas[indicePergunta]}</p>
        <button onclick='responder(1)'>Sim</button>
        <button onclick='responder(0)'>Não</button>`;
    } else {
        exibirResultado();
    }
}

function responder(resposta) {
    pontuacao += resposta;
    indicePergunta++;
    iniciarTeste();
}

function exibirResultado() {
    let resultadoTexto = "";
    if (pontuacao === 0) {
        resultadoTexto = "Parabéns! Você tem ótimo controle sobre seus sabotadores.";
    } else if (pontuacao === 1) {
        resultadoTexto = "Seus sabotadores estão presentes, mas você tem boas estratégias para lidar com eles.";
    } else {
        resultadoTexto = "Atenção! Seus sabotadores podem estar limitando seu crescimento.";
    }
    document.getElementById('resultado').innerHTML = resultadoTexto;
}

function iniciarRespiracao() {
    let instrucao = document.getElementById('instrucoes');
    let contador = document.getElementById('contador');
    let tempo = 12;

    instrucao.innerHTML = "Inspire profundamente por 4 segundos...";
    contador.innerHTML = tempo;
    let intervalo = setInterval(() => {
        tempo--;
        contador.innerHTML = tempo;
        if (tempo === 8) instrucao.innerHTML = "Segure o ar por 4 segundos...";
        if (tempo === 4) instrucao.innerHTML = "Expire lentamente por 4 segundos...";
        if (tempo === 0) {
            clearInterval(intervalo);
            instrucao.innerHTML = "Repita o processo até se sentir relaxado.";
            contador.innerHTML = "";
        }
    }, 1000);
}

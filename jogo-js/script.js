const imagensOriginais = [
    'img/ben10.jpg', 'img/alienx.jpg', 'img/fantasmatico.jpg', 'img/chama.jpg', 'img/quatro-bracos.png',
    'img/xrl8.jpg', 'img/diamante.jpg', 'img/cromatico.jpg', 'img/besta.jpg', 'img/macacoaranha.jpg'
];

const tabuleiro = document.getElementById('tabuleiro');
const txtTentativas = document.getElementById('tentativas');
const txtAcertos = document.getElementById('acertos');
const btnReiniciar = document.getElementById('btn-reiniciar');

let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false; 

let tentativas = 0;
let acertos = 0;

function iniciarJogo() {
    tabuleiro.innerHTML = '';
    primeiraCarta = null;
    segundaCarta = null;
    bloqueado = false;
    tentativas = 0;
    acertos = 0;
    
    txtTentativas.innerText = tentativas;
    txtAcertos.innerText = acertos;

    let listaCartas = [...imagensOriginais, ...imagensOriginais];
    listaCartas.sort(() => Math.random() - 0.5);

    for (let i = 0; i < listaCartas.length; i++) {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.imagem = listaCartas[i]; 

        const faceVerso = document.createElement('div');
        faceVerso.classList.add('face', 'verso');

        const faceFrente = document.createElement('div');
        faceFrente.classList.add('face', 'frente');

        const img = document.createElement('img');
        img.src = listaCartas[i]; 
        img.alt = "Card do jogo";

        faceFrente.appendChild(img);
        carta.appendChild(faceVerso);
        carta.appendChild(faceFrente);
        
        carta.addEventListener('click', virarCarta);
        tabuleiro.appendChild(carta);
    }
}

function virarCarta() {
    if (bloqueado) return;
    if (this === primeiraCarta) return;

    this.classList.add('virada');

    if (primeiraCarta === null) {
        primeiraCarta = this;
    } else {
        segundaCarta = this;
        tentativas++;
        txtTentativas.innerText = tentativas;
        checarPar();
    }
}

function checarPar() {
    if (primeiraCarta.dataset.imagem === segundaCarta.dataset.imagem) {
        acertos++;
        txtAcertos.innerText = acertos;
        limparJogada();
        checarFimDeJogo();
    } else {
        bloqueado = true;

        setTimeout(() => {
            primeiraCarta.classList.remove('virada');
            segundaCarta.classList.remove('virada');
            limparJogada();
        }, 1000);
    }
}

function checarFimDeJogo() {
    if (acertos === 10) {
        setTimeout(() => {
            alert(`Parabéns! Você venceu em ${tentativas} tentativas.`);
            iniciarJogo();
        }, 600);
    }
}

function limparJogada() {
    primeiraCarta = null;
    segundaCarta = null;
    bloqueado = false;
}

btnReiniciar.addEventListener('click', iniciarJogo);

iniciarJogo();
//VARIÁVEIS
const buttonMessage = document.querySelector('#buttonDoContador')
const buttonCloseMessage = document.querySelector('#buttonClose')
const cartaoDeMensagem = document.querySelector('#cartaoDeMensagem')

const foto1 = document.querySelector('#img1')
const foto2 = document.querySelector('#img2')
const foto3 = document.querySelector('#img3')
const teamo1 = document.querySelector('#teamo1')
const teamo2 = document.querySelector('#teamo2')
const teamo3 = document.querySelector('#teamo3')

//FUNÇÃO DO CONTADOR DE TEMPO
function updateTimer() {
    const startDate = new Date("2023-11-15T00:00:00");
    const now = new Date();
    
    let diff = now - startDate;
    
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);
    
    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);
    
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    
    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    
    let minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    
    let seconds = Math.floor(diff / 1000);
    
    document.getElementById("timer").innerText =
        `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer();

//FUNÇÃO PARA APARECER O CARTAO DA MENSAGEM
buttonMessage.addEventListener('click', helloMessage)
buttonCloseMessage.addEventListener('click', byeMessage)

function helloMessage(){
    cartaoDeMensagem.classList.remove('hide')
}

function byeMessage(){
    cartaoDeMensagem.classList.add('hide')
}


// FUNÇÃO PARA AS FOTOS SE MECHEREM E MOSTRAR A MENSAGEM EM BAIXO
foto1.addEventListener('mouseenter', foto1Mouseenter)
foto1.addEventListener('mouseout', foto1Mouseout)
foto2.addEventListener('mouseenter', foto2Mouseenter)
foto2.addEventListener('mouseout', foto2Mousout)
foto3.addEventListener('mouseenter', foto3Mouseenter)
foto3.addEventListener('mouseout', foto3Mousout)


function foto1Mouseenter(){
    teamo1.classList.remove('hide')
}

function foto1Mouseout(){
    teamo1.classList.add('hide')
}

function foto2Mouseenter(){
    teamo2.classList.remove('hide')
} 

function foto2Mousout(){
    teamo2.classList.add('hide')
}

function foto3Mouseenter(){
    teamo3.classList.remove('hide')
}

function foto3Mousout(){
    teamo3.classList.add('hide')
}

//FUNÇÃO PARA O AUDIO FUNCIONAR
let music = document.getElementById("backgroundMusic");
document.addEventListener("DOMContentLoaded", function() {
    music.muted = false; // Garante que não está mudo
    let playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            document.body.addEventListener("click", () => {
                music.play();
            }, { once: true });
        });
    }
});

//Card Lateral
const divButtonCardLateralEntrar = document.querySelector('#divButtonCardLateralEntrar')
const divButtonCardLateralSair = document.querySelector('#divButtonCardLateralSair')
const botaoParaEntrar = document.querySelector('#botaoParaEntrar')
const botaoParaSair = document.querySelector('#botaoParaSair')

const card = document.querySelector('article')

botaoParaEntrar.addEventListener('click', botaoEntrar)
botaoParaSair.addEventListener('click', botaoSair)

function botaoEntrar(){
    divButtonCardLateralEntrar.classList.add('hide')
    divButtonCardLateralSair.classList.remove('hide')

    card.classList.remove('hide')
}

function botaoSair(){
    divButtonCardLateralEntrar.classList.remove('hide')
    divButtonCardLateralSair.classList.add('hide')

    card.classList.add('hide')
}

// JOGO DA ADVINHAÇÃO:

let randomNumber = Math.round(Math.random() * 10)
let numberClient = document.querySelector('#numberClient')
const buttonVerificar = document.querySelector('#buttonDoJoguinho')
const errorMessage = document.querySelector('#errorMessage')
const acertoMessage = document.querySelector('#acerto')

const gameArea = document.querySelector('#gameArea')

buttonVerificar.addEventListener('click', play)

function play(){
    if(randomNumber == Number(numberClient.value)){
        gameArea.classList.add('aumentar')
        gameArea.classList.remove('diminuir')

        acertoMessage.classList.remove('hide')
        errorMessage.classList.add('hide')
    } else if(randomNumber != Number(numberClient.value)){
        gameArea.classList.remove('aumentar')
        gameArea.classList.add('diminuir')

        errorMessage.classList.remove('hide')
        acertoMessage.classList.add('hide')
        
    }
}

// botao do video 

const buttonDaSurpresa = document.querySelector('#buttonDaSurpresa')
const areaDoVideoSurpresa = document.querySelector('#areaDoVideoSurpresa')

buttonDaSurpresa.addEventListener('click', botaoDaSurpresa)

function botaoDaSurpresa(){
    areaDoVideoSurpresa.classList.remove('hide')
    music.muted = true;
}

// button de sair do video

let buttonVideoExit = document.querySelector('#sairDaTelaDoVD')
buttonVideoExit.addEventListener('click', () => {
    areaDoVideoSurpresa.classList.add('hide')
})
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

const buttonMessage = document.querySelector('#buttonDoContador')
const buttonCloseMessage = document.querySelector('#buttonClose')
const cartaoDeMensagem = document.querySelector('#cartaoDeMensagem')

buttonMessage.addEventListener('click', helloMessage)
buttonCloseMessage.addEventListener('click', byeMessage)

function helloMessage(){
    cartaoDeMensagem.classList.remove('hide')
}

function byeMessage(){
    cartaoDeMensagem.classList.add('hide')
}


const foto1 = document.querySelector('#img1')
const foto2 = document.querySelector('#img2')
const foto3 = document.querySelector('#img3')
const teamo1 = document.querySelector('#teamo1')
const teamo2 = document.querySelector('#teamo2')
const teamo3 = document.querySelector('#teamo3')

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


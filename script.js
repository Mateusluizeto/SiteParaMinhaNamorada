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

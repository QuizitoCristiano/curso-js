

function criaHoraDosSegudos(segundos){
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}



const myRelogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerarTempo = document.querySelector('.zerarTempo');
let segundos = 0;
let time;
console.log(myRelogio, iniciar, pausar, zerarTempo);


function iniciaRelogio(){
  time = setInterval(function(){
    segundos++;
    myRelogio.innerHTML = criaHoraDosSegudos(segundos);
  },1000)
}


iniciar.addEventListener('click', function(event) {
    myRelogio.classList.remove('pausado');
    myRelogio.classList.remove('zerarTime');
    clearInterval(time);
    iniciaRelogio();
})


pausar.addEventListener('click', function(event){
    myRelogio.classList.add('pausado');
    clearInterval(time);
});

zerarTempo.addEventListener('click', function(event){
    myRelogio.classList.add('zerarTime');
    clearInterval(time);
    myRelogio.innerHTML = '00:00:00';
    segundos = 0;
    
})




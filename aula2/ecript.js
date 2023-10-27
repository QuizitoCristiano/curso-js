const myinput = document.querySelector('.myinput');
const Adicionar = document.querySelector('.Adicionar'); 
const resultado = document.querySelector('.resultado');
const mensagens = [];



// Adicionar.addEventListener('click', function(event){

//     event.preventDefault();
//     const textoDigitado = myinput.value;

    
//     rer();
// })


// function rer(){
//     resultado.innerHTML = textoDigitado;
// }


















Adicionar.addEventListener('click', function () {
    const textoDigitado = myinput.value;
    const messageId = Date.now(); // Gera um ID único baseado no timestamp
    mensagens.push({ id: messageId, text: textoDigitado });
    myinput.value = '';

    exibirMensagens();
});

function exibirMensagens() {
    resultado.innerHTML = "";

    for (const mensagem of mensagens) {
        const li = document.createElement('li');
        li.textContent = mensagem.text;

        const button = document.createElement('button');
        button.textContent = 'Deletar';
        button.addEventListener('click', function () {
            deletarMensagem(mensagem.id);
        });

        li.appendChild(button);
        resultado.appendChild(li);
    }
}

function deletarMensagem(id) {
    const index = mensagens.findIndex((mensagem) => mensagem.id === id);
    if (index !== -1) {
        mensagens.splice(index, 1);
        exibirMensagens();
    }
}




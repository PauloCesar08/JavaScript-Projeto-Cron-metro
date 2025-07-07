const stop = document.querySelector(".stop-button");
const start = document.querySelector(".start-button");
const reset = document.querySelector(".reset-button");
const time = document.querySelector(".time");
let cron; //Variável vazia para dar uma função depois
let milliseconds = 0; // Para armazenar os milissegundos
let isRunning = false; // Para verificar se o cronômetro está em execução

function stopFunction() {
    clearInterval(cron); // Para o cronômetro
    isRunning = false; // Atualiza o estado para não estar em execução
}

function startFunction() {
    if (!isRunning) { // Verifica se o cronômetro não está em execução
        cron = setInterval(function() {
            milliseconds += 10; // Incrementa milissegundos a cada 10ms
            updateDisplay(); // Atualiza a exibição
        }, 10); // Chama a função a cada 10ms
        isRunning = true; // Atualiza o estado para estar em execução
    }
}

function resetFunction() {
    clearInterval(cron); // Para o cronômetro
    milliseconds = 0; // Reseta os milissegundos
    updateDisplay(); // Atualiza a exibição
    isRunning = false; // Atualiza o estado para não estar em execução
}

function updateDisplay() {
    // Calcula minutos, segundos e milissegundos
    let minutes = Math.floor((milliseconds / 1000) / 60);
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let millis = Math.floor((milliseconds % 1000) / 10); // Para mostrar os milissegundos em centésimos

    // Formata a string para 00:00:00
    time.innerHTML = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0') + ':' + 
        String(millis).padStart(2, '0');
}

// Adicionando os eventos de clique aos botões
start.addEventListener("click", startFunction);
stop.addEventListener("click", stopFunction);
reset.addEventListener("click", resetFunction);
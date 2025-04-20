function getHorarioSaoPaulo() {
    var agora = new Date();
    var options = { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' };
    return agora.toLocaleTimeString('pt-BR', options);
}

// Função para atualizar o horário de São Paulo na página HTML
function atualizarHorarioSaoPaulo() {
    var horaElement = document.getElementById("time");
    var horaSaoPaulo = getHorarioSaoPaulo();
    horaElement.innerText = "" + horaSaoPaulo;
}

// Função para obter a temperatura atual em São Paulo usando a API do OpenWeatherMap
function getTemperaturaSaoPaulo() {
    var chaveAPI = '063c8be4688cc09db56c925d970a9777'; // Substitua 'sua_chave_de_api' pela sua chave de API do OpenWeatherMap
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=Sao%20Paulo&appid=' + chaveAPI + '&units=metric';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temperatura = data.main.temp;
            var temperaturaFormatada = temperatura.toFixed(1); // Arredonda para uma casa decimal
            var temperaturaElement = document.getElementById("temperature");
            temperaturaElement.innerText = " " + temperaturaFormatada + " °C";
        })
        .catch(error => {
            console.error('Erro ao obter temperatura:', error);
        });
}

// Função para atualizar a hora e a temperatura em São Paulo na página HTML
function atualizarDados() {
    getTemperaturaSaoPaulo();
    var horaElement = document.getElementById("time");
    var horaSaoPaulo = getHorarioSaoPaulo();
    horaElement.innerText = horaSaoPaulo + " AM GMT-3";
}

// Função para atualizar os dados a cada segundo
function atualizar() {
    atualizarDados();
}

// Chama a função de atualização a cada segundo
setInterval(atualizar, 1000);



var mysong = document.getElementById("mysong");
var isPlaying = false;
var playIcon = document.getElementById("play");
var pauseIcon = document.getElementById("pause");


function toggleSong() {
    if (isPlaying) {
        mysong.pause();
        isPlaying = false;
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
    } else {
        mysong.play();
        isPlaying = true;
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    }
};
var audio_contator_on = new Audio('contator_on.wav'); // Caminho do seu arquivo de áudio
var audio_contator_off = new Audio('contator_off.wav'); // Caminho do seu arquivo de áudio

function alternarVisibilidade() {
            var objeto = document.getElementById('setor1');
            if (objeto.style.display === 'none') {
                objeto.style.display = 'block'; // Torna visível
            } else {
                objeto.style.display = 'none'; // Torna oculto
            }
        }

        // Adiciona um ouvinte de evento para a tecla pressionada
        document.addEventListener('keydown', function(event) {
            if (event.key === 'o' || event.key === 'O') {
                alternarVisibilidade();
            }
        });

document.addEventListener('DOMContentLoaded', function () {
    const ligarButton = document.getElementById('ligar');
    const pararButton = document.getElementById('parar');
    const reverterButton = document.getElementById('reverter');
    const valores = "-5.13,-0.66,3.33,6.88,10.01,12.74,15.10,17.12,18.81,20.21,21.32,22.17,22.79,23.19,23.40,23.42,23.28,22.99,22.58,22.05,21.42,20.71,19.93,19.10,18.21,17.30,16.36,15.40,14.45,13.50,12.56,11.65,10.76,9.90,9.09,8.32,7.60,6.93,6.31,5.75,5.25,4.80,4.41,4.08,3.80,3.58,3.41,3.28,3.20,3.15,3.14,3.15,3.18,3.23,3.27,3.31,3.33,3.33,3.29,3.20,3.05,2.82,2.51,2.09,1.56";
    const valores2 = "0.22,1.60,2.85,3.91,5.40,6.32,7.74,8.90,9.37,10.25,11.31,12.10,12.42,13.10,13.64,14.08,14.42,14.84,14.82,15.09,15.01,15.10,14.89,14.44,14.61,14.29,13.72,13.40,12.37,12.09,11.24,10.34,9.71,8.43,7.61,6.49,5.35,3.92,2.80,2.51,2.61,3.98,4.10,4.19,4.22,3.95,3.85,3.85,3.85,3.80,3.89,3.80,04.03,4.17,4.22,4.14,3.93,3.92,04.04,3.88,4.23,4.14,3.78,04.06,3.96,3.92,3.94,3.92,4.24,3.79,04.08,04.08,4.16,3.78,4.14,3.85,4.11,3.77,3.76,4.20,3.99,3.97,3.96,4.24,3.95,3.82,4.17,4.20,3.94,4.18,3.87,4.23,3.80,4.23,3.90,3.97,4.10,4.21,4.10,3.88,3.76,4.12,3.96,3.82,04.08,4.23,3.89,3.81,3.83,3.84,4.22,04.03,3.99,4.24,3.99,4.18,4.13,3.75,4.22,3.88,4.15,4.19,3.99,3.97,04.06,4.13,4.14,4.12,4.18,4.21,4.10,3.92,3.77,3.96,3.82,3.87,3.85,3.93,04.04,3.87,04.04,3.81,3.90,4.17,3.89,3.79,3.79,4.16,3.95,3.83,4.11,3.91,4.20,3.79,3.94,3.91,3.99,4.00,4.21,4.12,4.22,3.76,3.84,4.23,3.89,3.89,4.14,4.13,4.14,3.75,4.15,3.92,04.01,3.95,3.83,4.21,04.05,04.05,3.79,3.92,4.20,3.90,3.88,4.15,3.90,04.06,04.08,3.76,3.95,4.18,3.81,3.95,4.17,3.81,3.77,4.23,3.85,04.03,3.85,3.91,3.80,4.12,4.17,04.01,3.91,04.09,4.25,04.09,04.09,3.90,4.11,3.88,4.12,3.76,3.78,04.06,3.83,3.87,3.84,04.08,3.91,3.94,4.20,3.79,4.18,3.98,3.89,3.88,3.76,4.22,4.10,4.21,4.19,3.93,04.03,04.05,3.81,3.82,04.05,4.23,3.91,3.99,3.86,3.81,3.97,4.15,3.96,3.77,04.04,4.18,4.22,3.77,4.21,3.98,04.05,4.00,3.95"
    const valores3 = "-0.24,2.76,5.57,7.69,9.40,11.18,12.53,13.84,14.45,14.82,15.05,14.76,14.63,13.85,12.42,11.07,9.57,7.60,5.56,2.97,0.09,1.93,2.12,2.17,1.99,2.21,1.87,1.85,2.19,2.10,2.13,2.19,1.95,2.14,02.02,1.82,1.77,1.92,1.88,1.81,02.03,2.00,1.99,1.82,2.13,1.88,02.05,2.13,1.95,1.76,2.20,2.00,02.06,2.21,1.88,1.93,2.23,02.09,1.89,1.97,1.97,1.86,1.94,1.93,1.89,2.18,1.92,1.92,2.16,02.03,2.10,1.79,1.78,2.23,2.21,2.19,1.97,2.16,2.19,02.03,02.04,2.13,2.11,2.21,1.91,02.07,2.16,1.76,2.16,02.05,1.77,1.85,2.25,1.93,1.82,1.99,1.90,1.89,02.08,2.15,1.96,2.14,2.20,2.14,1.92,1.80,1.78,1.90,1.77,1.83,1.96,1.90,1.83,02.08,2.25,1.98,1.96,1.88,02.09,1.75,02.05,1.97,1.78,2.17,2.23,2.12,2.11,02.05,1.84,1.81,02.07,1.97,1.83,02.02,2.19,2.17,02.02,1.84,1.97,02.05,1.85,02.04,2.23,1.97,2.24,1.94,02.02,1.99,02.06,2.13,2.00,1.77,1.81,1.76,2.11,1.79,02.09,2.23,2.21,1.82,1.87,1.76,1.85,1.92,2.00,2.10,1.80,1.82,2.15,1.99,1.91,1.78,1.82,02.01,02.04,02.06,2.19,2.23,1.75,02.02,1.80,1.95,2.14,02.04,1.77,2.19,1.93,1.86,1.81,2.11,1.96,02.06,1.96,2.10,1.94,2.10,1.76,1.92,1.96,02.09,1.87,02.02,1.96,2.16,1.78,1.85,2.24,1.92,1.81,2.19,2.11,2.24,1.83,1.91,1.92,2.00,02.05,1.83,1.98,02.02,2.18,1.75,02.02,1.77,1.86,1.99,2.20,1.77,02.09,2.16,1.92,2.16,2.00,02.04,02.07,1.76,02.09,02.02,2.23,1.75,1.78,1.91,2.22,2.23,1.79,1.83,1.86,2.13,2.12,02.08,1.84,1.76,1.86,02.07,02.02,2.00,1.84"

    ligarButton.addEventListener('mousedown', () => {
        ligarButton.src = 'ligar_pressed.png'; // Imagem quando o botão é pressionado
        console.log("botao_ligar");
        client.publish('currentGraph', valores3);
        client.publish('/25/relay', 'relay1_on');
        audio_contator_on.play();
    });
    ligarButton.addEventListener('mouseup', () => {
        ligarButton.src = 'ligar.png'; // Imagem original
        client.publish('/25/relay', 'relay1_off');
    });

    pararButton.addEventListener('mousedown', () => {
        pararButton.src = 'parar_pressed.png'; // Imagem quando o botão é pressionado
        console.log("botao_parar");
        client.publish('/25/relay', 'relay3_on');
        audio_contator_off.play();
        client.publish('currentGraph', '0');
    });

    pararButton.addEventListener('mouseup', () => {
        pararButton.src = 'parar.png'; // Imagem original
        client.publish('/25/relay', 'relay3_off');
    });

    /*reverterButton.addEventListener('mousedown', () => {
        reverterButton.src = 'reverter_pressed.png'; // Imagem quando o botão é pressionado
    });
    reverterButton.addEventListener('mouseup', () => {
        reverterButton.src = 'reverter.png'; // Imagem original
    });*/

});

let meuGrafico;

function updateChart(dataString) {
    const samplingIntervalMs = 100; // Intervalo de amostragem em milissegundos (100ms = 10Hz)
    const durationSeconds = 48; // Janela de tempo de 26 segundos
    const totalPoints = durationSeconds * (1000 / samplingIntervalMs); // Número total de pontos em 26 segundos

    // Geração das labels do eixo x (em segundos, considerando os intervalos de 100ms)
    const labels = Array.from({ length: totalPoints }, (_, i) => (i * samplingIntervalMs) / 1000);

    // Configuração inicial do gráfico com dados vazios
    const config = {
        type: 'line',
        data: {
            labels: labels, // Labels para o eixo X
            datasets: [{
                label: 'Corrente em uma fase do motor',
                data: Array(totalPoints).fill(null), // Inicializa o dataset com valores nulos
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: false,
                pointRadius: 0.5,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0 // Desativa a animação
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Tempo(s)'
                    },
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0,
                        callback: function(value, index) {
                            // Exibe o label apenas para tempos inteiros
                            return (index % 10 === 0) ? (value.toFixed(1)/10) : '';
                        }
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Corrente RMS (A)'
                    },
                    min: 0,
                    max: 20
                }
            }
        }
    };

    const vetorNumerico = dataString.split(',').map(parseFloat);
    const canvas = document.getElementById('line-chart');
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.parentElement.clientWidth * 0.9;
    canvas.height = canvas.parentElement.clientHeight * 0.9;

    if (window.meuGrafico) {
        window.meuGrafico.destroy();
    }

    window.meuGrafico = new Chart(ctx, config);

    // Função para adicionar um ponto ao gráfico
    let index = 0;
    function adicionarPonto() {
        if (index < vetorNumerico.length) {
            // Adiciona o ponto na posição correta do array, sem deslocar os dados
            config.data.datasets[0].data[index] = vetorNumerico[index];

            // Atualiza o gráfico
            window.meuGrafico.update();
            index++;

            setTimeout(adicionarPonto, samplingIntervalMs); // Adiciona um ponto a cada 100ms
        }
    }

    adicionarPonto();
}








/*
function updateChart(dataString) {
    const config = {
        type: 'line',
        data: {
            datasets: [{
                label: 'Corrente em uma fase do motor',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: false,
                pointRadius: 0.5,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'second',
                        stepSize: 0.1
                    },
                    title: {
                        display: true,
                        text: 'Tempo (s)'
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10
                    },
                    min: Date.now(),
                    max: Date.now() + 10000,
                },
                y: {
                    min: 0,
                    max: 20,
                    title: {
                        display: true,
                        text: 'Corrente RMS (A)'
                    }
                }
            }
        }
    };

    const canvas = document.getElementById('line-chart');
    const ctx = canvas.getContext('2d');

    if (window.meuGrafico) {
        window.meuGrafico.destroy();
    }

    window.meuGrafico = new Chart(ctx, config);

    const vetorNumerico = dataString.split(',').map(parseFloat);
    const initialTimestamp = Date.now();

    let index = 0;
    function adicionarPonto() {
        if (index < vetorNumerico.length) {
            const currentTime = initialTimestamp + index * 100; // 100ms entre pontos
            const dataPoint = { x: currentTime, y: vetorNumerico[index] };
            config.data.datasets[0].data.push(dataPoint);

            // Remover pontos antigos fora da janela de 5 segundos
            config.data.datasets[0].data = config.data.datasets[0].data.filter(point => point.x >= currentTime - 10000);
            
            // Atualizar os limites do eixo X
            config.options.scales.x.min = currentTime - 10000;
            config.options.scales.x.max = currentTime;

            window.meuGrafico.update();
            index++;
            setTimeout(adicionarPonto, 100); // Adiciona um ponto a cada 100ms
        }
    }

    adicionarPonto();
}*/


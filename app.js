
document.addEventListener('DOMContentLoaded', function () {
    const ligarButton = document.getElementById('ligar');
    const pararButton = document.getElementById('parar');
    const reverterButton = document.getElementById('reverter');
    const valores = "-5.13,-0.66,3.33,6.88,10.01,12.74,15.10,17.12,18.81,20.21,21.32,22.17,22.79,23.19,23.40,23.42,23.28,22.99,22.58,22.05,21.42,20.71,19.93,19.10,18.21,17.30,16.36,15.40,14.45,13.50,12.56,11.65,10.76,9.90,9.09,8.32,7.60,6.93,6.31,5.75,5.25,4.80,4.41,4.08,3.80,3.58,3.41,3.28,3.20,3.15,3.14,3.15,3.18,3.23,3.27,3.31,3.33,3.33,3.29,3.20,3.05,2.82,2.51,2.09,1.56";
    const valores2 = "0.22,1.60,2.85,3.91,5.40,6.32,7.74,8.90,9.37,10.25,11.31,12.10,12.42,13.10,13.64,14.08,14.42,14.84,14.82,15.09,15.01,15.10,14.89,14.44,14.61,14.29,13.72,13.40,12.37,12.09,11.24,10.34,9.71,8.43,7.61,6.49,5.35,3.92,2.80,2.51,2.61,3.98,4.10,4.19,4.22,3.95,3.85,3.85,3.85,3.80,3.89,3.80,04.03,4.17,4.22,4.14,3.93,3.92,04.04,3.88,4.23,4.14,3.78,04.06,3.96,3.92,3.94,3.92,4.24,3.79,04.08,04.08,4.16,3.78,4.14,3.85,4.11,3.77,3.76,4.20,3.99,3.97,3.96,4.24,3.95,3.82,4.17,4.20,3.94,4.18,3.87,4.23,3.80,4.23,3.90,3.97,4.10,4.21,4.10,3.88,3.76,4.12,3.96,3.82,04.08,4.23,3.89,3.81,3.83,3.84,4.22,04.03,3.99,4.24,3.99,4.18,4.13,3.75,4.22,3.88,4.15,4.19,3.99,3.97,04.06,4.13,4.14,4.12,4.18,4.21,4.10,3.92,3.77,3.96,3.82,3.87,3.85,3.93,04.04,3.87,04.04,3.81,3.90,4.17,3.89,3.79,3.79,4.16,3.95,3.83,4.11,3.91,4.20,3.79,3.94,3.91,3.99,4.00,4.21,4.12,4.22,3.76,3.84,4.23,3.89,3.89,4.14,4.13,4.14,3.75,4.15,3.92,04.01,3.95,3.83,4.21,04.05,04.05,3.79,3.92,4.20,3.90,3.88,4.15,3.90,04.06,04.08,3.76,3.95,4.18,3.81,3.95,4.17,3.81,3.77,4.23,3.85,04.03,3.85,3.91,3.80,4.12,4.17,04.01,3.91,04.09,4.25,04.09,04.09,3.90,4.11,3.88,4.12,3.76,3.78,04.06,3.83,3.87,3.84,04.08,3.91,3.94,4.20,3.79,4.18,3.98,3.89,3.88,3.76,4.22,4.10,4.21,4.19,3.93,04.03,04.05,3.81,3.82,04.05,4.23,3.91,3.99,3.86,3.81,3.97,4.15,3.96,3.77,04.04,4.18,4.22,3.77,4.21,3.98,04.05,4.00,3.95"

    ligarButton.addEventListener('mousedown', () => {
        ligarButton.src = 'ligar_pressed.png'; // Imagem quando o botão é pressionado
        console.log("botao_ligar");
        client.publish('currentGraph', valores2);
        client.publish('/25/relay', 'relay1_on');
    });
    ligarButton.addEventListener('mouseup', () => {
        ligarButton.src = 'ligar.png'; // Imagem original
        client.publish('/25/relay', 'relay1_off');
    });

    pararButton.addEventListener('mousedown', () => {
        pararButton.src = 'parar_pressed.png'; // Imagem quando o botão é pressionado
        console.log("botao_parar");
        client.publish('/25/relay', 'relay3_on');
        
        client.publish('currentGraph', '0');
    });

    pararButton.addEventListener('mouseup', () => {
        pararButton.src = 'parar.png'; // Imagem original
        client.publish('/25/relay', 'relay3_off');
    });

    reverterButton.addEventListener('mousedown', () => {
        reverterButton.src = 'reverter_pressed.png'; // Imagem quando o botão é pressionado
    });
    reverterButton.addEventListener('mouseup', () => {
        reverterButton.src = 'reverter.png'; // Imagem original
    });

});

let meuGrafico;

function updateChart(dataString) {
    // Geração das labels do eixo x
    const labels = Array.from({ length: 258 }, (_, i) => i + 1);

    // Configuração inicial do gráfico com dados vazios
    const config = {
        type: 'line', // Tipo de gráfico: linha
        data: {
            labels: labels, // Labels para o eixo X
            datasets: [{
                label: 'Corrente em uma fase do motor',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: false,
                pointRadius: 0.5, // Tamanho dos pontos (ajuste conforme necessário)
                pointHoverRadius: 4 // Tamanho dos pontos ao passar o mouse
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Desativa a manutenção de proporção padrão
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
                            // Mostrar label apenas para os valores em intervalos de 6 em 6
                            return index % 6 === 0 ? value/6 : '';
                        }
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Corrente RMS (A)'
                    }
                }
            }
        }
    };

    // Converte a string de dados em um array de números
    const vetorNumerico = dataString.split(',').map(parseFloat);
    const canvas = document.getElementById('line-chart');
    const ctx = canvas.getContext('2d');

    // Redimensiona o canvas para 90% da largura e altura do contêiner
    canvas.width = canvas.parentElement.clientWidth * 0.9;
    canvas.height = canvas.parentElement.clientHeight * 0.9;

    // Destrói o gráfico existente, se houver, antes de criar um novo
    if (window.meuGrafico) {
        window.meuGrafico.destroy();
    }
    config.data.datasets[0].data = [];
    window.meuGrafico = new Chart(ctx, config);

    // Função para adicionar um ponto ao gráfico
    let index = 0;
    function adicionarPonto() {
        if (index < vetorNumerico.length) {
            config.data.datasets[0].data.push(vetorNumerico[index]);
            window.meuGrafico.update();
            index++;
            setTimeout(adicionarPonto, 10); // Adiciona um ponto a cada 50ms
        }
    }

    // Inicia o efeito de desenho
    adicionarPonto();
}
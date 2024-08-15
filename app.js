
document.addEventListener('DOMContentLoaded', function () {
    const ligarButton = document.getElementById('ligar');
    const pararButton = document.getElementById('parar');
    const reverterButton = document.getElementById('reverter');
    const valores = "-5.13,-0.66,3.33,6.88,10.01,12.74,15.10,17.12,18.81,20.21,21.32,22.17,22.79,23.19,23.40,23.42,23.28,22.99,22.58,22.05,21.42,20.71,19.93,19.10,18.21,17.30,16.36,15.40,14.45,13.50,12.56,11.65,10.76,9.90,9.09,8.32,7.60,6.93,6.31,5.75,5.25,4.80,4.41,4.08,3.80,3.58,3.41,3.28,3.20,3.15,3.14,3.15,3.18,3.23,3.27,3.31,3.33,3.33,3.29,3.20,3.05,2.82,2.51,2.09,1.56";
    

    ligarButton.addEventListener('mousedown', () => {
        ligarButton.src = 'ligar_pressed.png'; // Imagem quando o botão é pressionado
        console.log("botao_ligar");
        client.publish('currentGraph', valores);
        client.publish('/25/relay', 'relay1_on');
        client.publish('/25/relay', 'relay2_off');
    });
    ligarButton.addEventListener('mouseup', () => {
        ligarButton.src = 'ligar.png'; // Imagem original
    });

    pararButton.addEventListener('mousedown', () => {
        pararButton.src = 'parar_pressed.png'; // Imagem quando o botão é pressionado
        console.log("botao_parar");
        client.publish('/25/relay', 'relay2_on');
        client.publish('/25/relay', 'relay1_off');
        client.publish('currentGraph', '0');
    });

    pararButton.addEventListener('mouseup', () => {
        pararButton.src = 'parar.png'; // Imagem original
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
    const labels = Array.from({ length: 64 }, (_, i) => i + 1);

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
                        text: 'Amostra'
                    },
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
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
            setTimeout(adicionarPonto, 50); // Adiciona um ponto a cada 50ms
        }
    }

    // Inicia o efeito de desenho
    adicionarPonto();
}
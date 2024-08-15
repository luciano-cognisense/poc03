document.addEventListener('DOMContentLoaded', function () {
    const ligarButton = document.getElementById('ligar');
    const pararButton = document.getElementById('parar');
    const reverterButton = document.getElementById('reverter');

    ligarButton.addEventListener('mousedown', () => {
        ligarButton.src = 'ligar_pressed.png'; // Imagem quando o botão é pressionado
        console.log("botao_ligar");
        client.publish('/25/relay', 'relay1_on');
    });
    ligarButton.addEventListener('mouseup', () => {
        ligarButton.src = 'ligar.png'; // Imagem original
    });

    pararButton.addEventListener('mousedown', () => {
        pararButton.src = 'parar_pressed.png'; // Imagem quando o botão é pressionado
        console.log("botao_parar");
        client.publish('/25/relay', 'relay2_on');
        client.publish('/25/relay', 'relay1_off');
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
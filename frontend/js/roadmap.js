const botaoTrilhas = document.getElementById('botao-trilhas');
const nomeDaStack = document.getElementById('nome-stack');
const linhaDoTempo = document.getElementById('linhaDoTempo');


const stacks = ['BACKEND', 'FRONTEND', 'DEVOPS', 'MOBILE']
let indexStackAtual = 0;

const renderizaTrilha = (stack) => {

    fetch(`https://codigo-certo-chi.vercel.app/roadmap?stack=${stack}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('network response was not ok: ' + response.statusText)
            }
            return response.json()
        })
        .then(data => {

            nomeDaStack.textContent = stack
            linhaDoTempo.innerHTML = '';

            data.forEach((item, index) => {
                const itemDaTimeline = document.createElement('div');
                itemDaTimeline.className = 'timeline-item'
                let classeImgItem = "item-img-linha"

                if (index === data.length - 1) {
                    classeImgItem = "img_desabilitada"
                }

                itemDaTimeline.innerHTML = `
            <div class="item-imagem-container">
                <img class="item-img-quadrado" src="./imagens/img-quadrado.png" />
                <img class=${classeImgItem} src="./imagens/img_linha.png" />
            </div>
            <div class="item-content">
                <h6 class="item-titulo">${item.name}</h6>
                <p class="item-descricao">${item.description}</p>
            </div>
        `;

                linhaDoTempo.appendChild(itemDaTimeline)
            })
        })
}

const updateTituloStack = () => {
    indexStackAtual = (indexStackAtual + 1) % stacks.length;

    renderizaTrilha(stacks[indexStackAtual])
}


botaoTrilhas.addEventListener('click', updateTituloStack)

renderizaTrilha(stacks[indexStackAtual])

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
            console.log(data)
            linhaDoTempo.innerHTML = '';

            data.forEach((item, index) => {
                const itemDaTimeline = document.createElement('div');
                itemDaTimeline.className = 'timeline-item'
                let imgDoItem = "./imagens/item-img.png"
                let classeImgItem = "item-img"

                if (index === data.length - 1) {
                    imgDoItem = "./imagens/img-UltimoItem.png"
                    classeImgItem = "ultimo-item-img"
                }

                itemDaTimeline.innerHTML = `
            <img class=${classeImgItem} src=${imgDoItem} />
            <div class="item-content">
                <h6 class="item-titulo">${item.name}</h6>
                <p class="item-descricao">${item.description}</p>
            </div>
        `;

                linhaDoTempo.appendChild(itemDaTimeline)
            })

            const imgSetaPBaixo = document.createElement('div');
            imgSetaPBaixo.className = 'img-itemContainer'

            imgSetaPBaixo.innerHTML = `
            <img class="img-SetaPBaixo" src="./imagens/iconeSetaPBaixo.png" />
        `
            linhaDoTempo.appendChild(imgSetaPBaixo)
        })
}

const updateTituloStack = () => {
    indexStackAtual = (indexStackAtual + 1) % stacks.length;

    renderizaTrilha(stacks[indexStackAtual])
}


botaoTrilhas.addEventListener('click', updateTituloStack)

renderizaTrilha(stacks[indexStackAtual])

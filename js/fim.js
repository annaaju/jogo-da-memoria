document.addEventListener('DOMContentLoaded', function() {
    const nomeJogadorSpan = document.getElementById('nome-jogador')
    const tempoSpan = document.getElementById('tempo')

    const nomeJogador = localStorage.getItem('jogador')
    const tempo = localStorage.getItem('tempo')

    nomeJogadorSpan.textContent = nomeJogador

    const tempoElement = document.querySelector('.tempo')
    tempoElement.innerHTML = `Seu tempo foi de: ${tempo} segundos`

    const button = document.getElementById('jogarnovamente')

    const jogar = () => {
        event.preventDefault()
        window.location = 'jogo.html'
    }

    button.addEventListener('click', jogar)

})
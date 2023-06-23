const grid = document.querySelector('.grid')

const spanJogador = document.querySelector('.jogador')

const timer = document.querySelector('.timer')

const personagens = [ 'asoka', 'boba', 'chewbacca', 'grogu', 'leia', 'luke', 'mando', 'master', 'r2d2-c3po', 'vader'
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let primeiraCarta = null
let segundaCarta = null

const redirecionarFimDoJogo = () => {
    const jogador = localStorage.getItem('jogador');
    const tempo = timer.innerHTML;

    localStorage.setItem('jogador', jogador);
     localStorage.setItem('tempo', tempo);

    setTimeout(() => {
        window.location.href = 'fimdejogo.html';
        }, 100);
    }
    

const checkFimDoJogo = () =>{
    
    const cartaacertada = document.querySelectorAll('.carta-acertada')

    if(cartaacertada.length == 20){
        
        clearInterval(this.loop)
        redirecionarFimDoJogo()

    }
}


const checkCartas = ( ) => {
    const primeiroPersonagem = primeiraCarta.getAttribute('data-personagem')
    const segundoPersonagem = segundaCarta.getAttribute('data-personagem')

    if (primeiroPersonagem == segundoPersonagem){
        primeiraCarta.firstChild.classList.add('carta-acertada')
        segundaCarta.firstChild.classList.add('carta-acertada')

        primeiraCarta = null
        segundaCarta = null

        checkFimDoJogo()


    }else{
        setTimeout(() => {
            primeiraCarta.classList.remove('revela-carta')
            segundaCarta.classList.remove('revela-carta')
        
            primeiraCarta = null
            segundaCarta = null
        
        }, 700)
        
    }

}

const revelaCarta = ({target}) => {
    
    const cartaSelecionada = target.parentNode // recupera a div que representa a carta

    if (!cartaSelecionada.classList.contains('carta')) {
        return  // verificação se a carta clicada possui a calasse carta garantindo que só as cartas sejam viradas e não o grid
    }

    if (cartaSelecionada.classList.contains('revela-carta')) {
        return;// evita clique duplo
    }

    cartaSelecionada.classList.add('revela-carta')

    if (primeiraCarta === null) {
        primeiraCarta = cartaSelecionada
    
    } else if (segundaCarta === null && cartaSelecionada !== primeiraCarta) {
        segundaCarta = cartaSelecionada
       
        checkCartas()
   
    } else {
        setTimeout(() => {
        primeiraCarta.classList.remove('revela-carta')
        segundaCarta.classList.remove('revela-carta')
        primeiraCarta = null
        segundaCarta = null
        }, 500)
    }
}
       

const criaCarta = (personagem) => {
    
    // criação das cartas no html e css sem ser de forma manual
    
    const carta = createElement('div', 'carta')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url(../images/${personagem}.jpg)`

    carta.appendChild(front)
    carta.appendChild(back)

    carta.addEventListener('click', revelaCarta)

    carta.setAttribute('data-personagem', personagem)

    return carta
}

const carregaJogo = () => {
    
    const duplicaPersonagens = [ ... personagens, ... personagens ]

    const embaralha = duplicaPersonagens.sort(() => Math.random() - 0.5)
    
    embaralha.forEach((personagem) => {
        const carta = criaCarta(personagem)
        grid.appendChild(carta)
    })
}

const starTimer = () =>{

    this.loop = setInterval(() =>{
        
        const tempoAtual = Number(timer.innerHTML)
        timer.innerHTML = tempoAtual + 1

    }, 1000)

}

window.onload = () =>{
    
    const nomeJogador = localStorage.getItem('jogador')

    spanJogador.innerHTML = nomeJogador
    
    starTimer()

    carregaJogo()
}


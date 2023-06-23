const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login-form')

const validateInput = ({ target }) => {
    
    if (target.value.length > 1) {
        button.removeAttribute('disabled')
        return
      }
    
      button.setAttribute('disabled', '')
    }

const Submit = () =>{
    event.preventDefault()
    localStorage.setItem('jogador', input.value)
    window.location = 'page/jogo.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', Submit)
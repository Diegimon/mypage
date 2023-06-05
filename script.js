var divBotao = document.getElementById('dark_button')
var body = document.querySelector('html')
var darkModeAtivado = true

divBotao.addEventListener('click', change_mode)

function change_mode() {
  darkModeAtivado = !darkModeAtivado // Alterna o estado atual

  if (darkModeAtivado) {
    body.classList.add('dark-mode')
    divBotao.textContent = 'ligth'
  } else {
    body.classList.remove('dark-mode')
    divBotao.textContent = 'Dark'
  }
}

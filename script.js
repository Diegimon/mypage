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
// ------------------------------- botão submenu -------------------------------
var scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault()

    var targetSelector = link.getAttribute('data-target')
    var targetElement = document.querySelector(targetSelector)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  })
})
// ------------------------------- swiper -------------------------------
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// ------------------------------- pulse -------------------------------
function pulsar(targetId) {
  var item = document.getElementById(targetId)
  item.classList.add('pulse')
  setTimeout(function () {
    item.classList.remove('pulse')
  }, 1000) // Tempo em milissegundos (1 segundo)
}

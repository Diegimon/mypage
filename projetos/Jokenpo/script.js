function jogar() {
  var pedra = document.getElementById('pedra').checked
  var papel = document.getElementById('papel').checked
  var tesoura = document.getElementById('tesoura').checked

  if (pedra == false && papel == false && tesoura == false) {
    alert('Selecione uma opção')
  } else {
    console.log('jogando')
    var pcImage = document.getElementById('pc')
    var sorteio = Math.floor(Math.random() * 3)
    switch (sorteio) {
      case 0:
        pcImage.src = 'contents/pcpapel.png'
        break
      case 1:
        pcImage.src = 'contents/pcpedra.png'
        break
      case 2:
        pcImage.src = 'contents/pctesoura.png'
        break
    }
    // --------------------------- Empate ---------------------------
    if (
      (pedra == true && sorteio == 1) ||
      (papel == true && sorteio == 0) ||
      (tesoura == true && sorteio == 2)
    ) {
      console.log('empate')
      document.getElementById('placar').innerHTML = 'Empate'

      // --------------------------- Vitoria ---------------------------
    } else if (
      (pedra == true && sorteio == 2) ||
      (papel == true && sorteio == 1) ||
      (tesoura == true && sorteio == 0)
    ) {
      console.log('empate')
      document.getElementById('placar').innerHTML = 'Você venceu!'
    }
    // --------------------------- Derrota ---------------------------
    else {
      console.log('empate')
      document.getElementById('placar').innerHTML = 'Você perdeu!'
    }
  }
}

function resetar() {
  document.getElementById('pc').src = 'pc.png'
  document.getElementById('placar').innerHTML = ''
}

function insert(num) {
  var numero = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = numero + num
}
function clean() {
  document.getElementById('resultado').innerHTML = ''
}
function back() {
  var resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}
function calc() {
  var resultado = document.getElementById('resultado').innerHTML
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
    console.log(resultado)
  } else if (resultado == '.') {
    document.getElementById('resultado').innerHTML = 'só tem um ponto'
  } else {
    document.getElementById('resultado').innerHTML = 'Invalido'
  }
}

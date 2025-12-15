let numeroActual = '0'
let operador = '' // +, -, *, /, etc
let operando = '' // es cualquier numero

// const inputDisplay = document.getElementById('inputDisplay')

// Consultando un elemento a la vez
const inputDisplay = document.querySelector('#inputDisplay')
// Consultando múltiples elementos a la vez
const buttons = document.querySelectorAll('.button')

console.log(buttons)

buttons.forEach(function(button) {
  // console.log(button)

  button.addEventListener('click', function(event) {
    // console.log('Hice click', event.target) // target es el boton presionado

    const botonSeleccionado = event.target
    const botonTexto = botonSeleccionado.textContent

    console.log(botonTexto)

    // TODO: Agregar la lógica de la calculadora
  })
})
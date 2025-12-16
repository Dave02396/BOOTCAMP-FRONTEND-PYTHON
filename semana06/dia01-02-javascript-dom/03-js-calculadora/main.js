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

    // Paso 2. Evaluamos el operador seleccionado
    if('+-*'.includes(botonTexto)) {
      operador = botonTexto
      operando = Number(numeroActual) // Guardamos temporalmente el número actual
      numeroActual = 0
    } else if (botonTexto === '=') {
      // Paso 3. Cuando presionamos el botón '='
      // Aquí realizamos las operaciones en base al número actual y el operando

      // TODO: Añadir la lógica para soportar las operaciones de resta y multiplicación
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (botonTexto === 'CE') {
      // Paso 4. Cuando presionamos el botón 'CE'
      // Limpiamos operando, operador y el numeroActual(input)
      numeroActual = '0'
      operador = ''
      operando = ''
    } else {
      // Paso 1. Evaluar cuando presionamos algún número
      numeroActual = Number(numeroActual + botonTexto)
    }

    inputDisplay.value = numeroActual
  })
})
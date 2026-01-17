// Asincronía

// JS no espera a que algo lento termine
// JS sigue ejecutando mientras algo se procesa en segundo plano

console.log('Empezando mi programa')

setTimeout(() => {
  console.log('Esta línea tardará 2 segundos o 20000 ms')
}, 2000); // 

console.log('Fin de mi programa')

// Formato JSON

console.log(JSON.stringify({ name: 'Alonso' }))
console.log(JSON.parse('{ "name": "Alonso" }'))

// OBJETIVO: Traer información en formato JSON desde una URL

const url = "https://jsonplaceholder.typicode.com/todos"

// console.log(fetch(url)) // Devuelve una promesa (Promise)

// Estados de un promesa -> pending, fulfilled y rejected

// fetch(url)
//   .then(response => response.json()) // Se ejecuta cuando la respuesta llegó correctamente y además convertimos la respuesta a un objeto JS
//   .then(data => {
//     console.log(data) // Aquí podemos usar el objeto JS
//     console.log(data[0].title)
//   })

const renderTodos = (todos = []) => {
  const divApp = document.querySelector('#app')

  let todoList = ''

  todos.forEach(todo => {
    todoList += `<h2>${todo.id} - ${todo.title}</h2>`
  })

  divApp.innerHTML = todoList
}

fetch(url)
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log(data)
    renderTodos(data)
  })
  .catch(error => {
    // Sirve para controlar errores inesperados
    console.log(error)
  })

// TODO: Renderizar la lista de posts del servicio jsonplaceholder con su titulo, id y body

// https://jsonplaceholder.typicode.com/posts
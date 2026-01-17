const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

// let tasks = [
//   {
//     id: 'tarea-1',
//     title: 'Estudiar javascript',
//     completed: false
//   },
//   {
//     id: 'tarea-2',
//     title: 'Salir al receso',
//     completed: true
//   },
//   {
//     id: 'tarea-3',
//     title: 'Resolver el reto de la semana',
//     completed: false
//   }
// ]

let tasks = JSON.parse(localStorage.getItem('TASKS_LS')) ?? []

console.log(tasks)

function saveTasksInLocalStorage(tasks = []) {
  localStorage.setItem('TASKS_LS', JSON.stringify(tasks))
}

function renderTasks(tasks = []) {
  // console.log('Renderizando tasks...', tasks)
  let lista = ''

  tasks.forEach(task => {
    // console.log(task)

    // lista = lista + '<li>' + task.title + ' </li>'
    lista = lista + `
      <li class="flex gap-4 py-2 items-center justify-center">
        <input
          type="checkbox"
          data-id="${task.id}"
          ${task.completed ? 'checked' : ''}
        />
        <div class="w-full ${task.completed ? 'line-through text-red-500' : ''}">
          ${task.title}
        </div>
        <div class="flex gap-2">
          <button
            class="border border-green-700 font-medium text-sm text-green-700 px-1 py-1 rounded-lg hover:bg-green-700 hover:text-white duration-300 cursor-pointer w-8 h-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
          </button>
          <button
            class="task-item__remove border border-red-700 font-medium text-sm text-red-700 px-1 py-1 rounded-lg hover:bg-red-700 hover:text-white duration-300 cursor-pointer w-8 h-8 "
            data-id="${task.id}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
          </button>
        </div>
      </li>
    `
  })

  console.log(lista)
  taskList.innerHTML = lista
}

// TODO - 01 Al presionar enter en la caja de texto debemos agregr una nueva tarea a la lista

taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Lógica para agregar una nueva tarea

    // const value = event.target.value
    const { value } = event.target // target es un objeto

    const newTask = {
      id: crypto.randomUUID(),
      title: value,
      completed: false
    }

    console.log(newTask)

    tasks.push(newTask)

    renderTasks(tasks)

    taskInput.value = ''

    saveTasksInLocalStorage(tasks)
  }
})

taskList.addEventListener('click', (event) => {
  const { target } = event

  const buttonRemove = event.target.closest('.task-item__remove')

  if (buttonRemove) {
    console.log('Eliminando tarea...')
    const { id } = buttonRemove.dataset // Id que queremos eliminar en data-id

    console.log(id)

    tasks = tasks.filter(task => task.id !== id)

    renderTasks(tasks)

    saveTasksInLocalStorage(tasks)
  }

  // TODO: Al presionar el check debe completarse la tarea en el arreglo de tasks
  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    console.log('Completando tarea...')

    const { id } = target.dataset

    const tasksSelectedIndex = tasks.findIndex(task => {
      return task.id === id
    }) // Esto nos ayuda a buscar una tarea por id

    tasks[tasksSelectedIndex] = {
      ...tasks[tasksSelectedIndex],
      completed: !tasks[tasksSelectedIndex].completed
    }

    renderTasks(tasks)

    console.log(tasks)

    saveTasksInLocalStorage(tasks)
  }
})

// TODO: Al hacer click en el botón 'Limpiar tareas completadas' debemos remover todas las tareas completadas. Hay que llamar al método render también.
taskClear.addEventListener('click', function(event) {
  tasks = tasks.filter(task => !task.completed)

  renderTasks(tasks)

  saveTasksInLocalStorage(tasks)
})


renderTasks(tasks)
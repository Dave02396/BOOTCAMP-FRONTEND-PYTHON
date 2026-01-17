// 09 - Propiedades de un componente (Con destructuring)

const BienvenidaPersonalizada = ({ nombre, edad = 18 }) => {
  return <h3>Hola {nombre} y tu edad es {edad}!</h3>
}

const App = () => {
  return (
    <div>
      <h4>Propiedades de un componente</h4>

      <BienvenidaPersonalizada nombre="Eduardo" edad={24} />
      <BienvenidaPersonalizada nombre="Victor" edad={40} />
      <BienvenidaPersonalizada nombre="Alex" />
    </div>
  )
}

export default App

// 08 - Propiedades de un componente (Ahora el componente es reutilizable)

// const BienvenidaPersonalizada = (props) => {
//   return <h3>Hola {props.nombre} y tu edad es {props.edad}!</h3>
// }

// const App = () => {
//   return (
//     <div>
//       <h4>Propiedades de un componente</h4>

//       <BienvenidaPersonalizada nombre="Eduardo" edad={23} />
//       <BienvenidaPersonalizada nombre="Victor" edad={39} />
//       <BienvenidaPersonalizada nombre="Alex" />
//     </div>
//   )
// }

// export default App

// 07 - Usando expresiones con jsx "{}"

// import { LISTA_DE_FRUTAS, EDAD, curso } from './components/frutas.js'

// const App = () => {
//   const suma = 8 + 9
//   const nombre = 'Victor'

//   // Comentarios en React/JS dentro del cuerpo de la función
//   /* Otro comentario multilínea */

//   return (
//     <section>
//       <h1>Hola React!</h1>
//       <p>{suma}</p>
//       <p>{nombre}</p>
//       <p>{1 + 2 * 9 ** 2}</p>
//       <p>{`Hola ${nombre}`}</p>
//       <p>Hola {nombre} ✅</p>

//       {/* Comentario en React dentro el JSX */}

//       <p>{LISTA_DE_FRUTAS}</p>
//       <p>{EDAD}</p>
//       <p>{JSON.stringify(curso)}</p>
//       <p>{curso.nombre}</p>
//       <p>{curso.nota}</p>
//     </section>
//   )
// }

// export default App

// 06 - Importando componentes externos

// import { ComponenteDespedida } from './components/ComponenteDespedida.jsx'
// import ComponenteSaludo from './components/ComponenteSaludo.jsx'

// export default function App() {
//   return (
//     <section>
//       <h3>Componentes anidados</h3>      

//       <ComponenteSaludo />

//       <ComponenteDespedida />
//     </section>
//   )
// }

// 05 - Anidando componentes dentro de otros

// function ComponenteSaludo() {
//   return <h4>Hola alumnos!</h4>
// }

// function ComponenteDespedida() {
//   return <h4>Vamos al receso!</h4>
// }

// export default function App() {
//   return (
//     <section>
//       <h3>Componentes anidados</h3>      

//       <ComponenteSaludo />

//       <ComponenteDespedida />
//     </section>
//   )
// }

// 04 - Extensiones de VSCODE necesarias para usar React
// ES7+ React/Redux/React-Native snippets
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// Snippets para crear componentes (rfc, rafce)

// snippet: rfc

// export default function App() {
//   return (
//     <div>Hola React!</div>
//   )
// }

// snippet: rafce

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// 03 - Componente usando múltiples líneas + Fragments (<></>)

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estamos aprendiendo sobre componentes.</p>
//     </>
//   )
// }

// export default App

// 02 - Componente base usando arrow functions

// const Welcome = () => {

//   return <h1>Bienvenidos a React.js con Arrow function!</h1>
// }

// export default Welcome

// 01 - Componente base usando function

// function Welcome() {
//   return <h1>Bienvenidos a React.js!</h1>
// }

// export default Welcome

// Un componente:
// * Es una función, devuelve JSX, su nombre empieza con mayúscula.

// Partes de una componente
// 1. Imports (si los hay)
// 2. Lógica (varibales, hooks, functiones)
// 3. Return -> jsx
// 4. Export

// Reglas básicas de un componente
// * Un solo elemento padre
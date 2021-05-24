// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

// Exercice 1
// function Greeting({initialName = ''}) {
//   const [name, setName] = React.useState(window.localStorage.getItem('name') || initialName)

//   console.log(name)

//   React.useEffect(() => window.localStorage.setItem('name', name))

//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// 💯 Extra credit 1: lazy state initialization
// 💯 Extra credit 2: effect dependencies
function Greeting({initialName = ''}) {
  const getInitialState = () => window.localStorage.getItem('name') || initialName
  const [name, setName] = React.useState(getInitialState)

  React.useEffect(() => window.localStorage.setItem('name', name), [name])

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App

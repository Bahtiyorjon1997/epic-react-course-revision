// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useSyncLocalStorageState(key, defaultState = '') {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key) //if you just wanna send initialName just put it without arrow func
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage)
    }
    return defaultState
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  // const getInitialNameValue = () => {
  //   return window.localStorage.getItem('name') || initialName
  // }
  const [name, setName] = useSyncLocalStorageState(initialName)
  // const [name, setName] = React.useState(
  //   () => window.localStorage.getItem('name') || initialName, //if you just wanna send initialName just put it without arrow func
  // )

  // React.useEffect(() => {
  //   window.localStorage.setItem('name', name)
  // }, [name]) // useEffect renders only if the name changes, this is an optimized version that keeps the useEffect from unintended renders

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
  return <Greeting initialName="helo" />
}

export default App

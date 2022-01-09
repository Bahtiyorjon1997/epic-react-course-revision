// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React, {useState} from 'react'

function Greeting({initialname}) {
  const [name, setName] = useState(initialname)

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={e => handleChange(e)} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialname="greak" />
}

export default App

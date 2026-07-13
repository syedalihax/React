import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [City, setCity] = useState('')
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState('')
  const [newCity, setNewCity] = useState('')

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        setNewName(name)
        setNewAge(Age)
        setNewCity(City)
        
      }}>
        <label htmlFor="Name">Name:</label>

        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          required
        />
        <br /><br />
        <label htmlFor="Name">Age:</label>

        <input
          type="number"
          value={Age}
          onChange={(e) => {
            setAge(e.target.value)
          }}
          required
        />
        <br /><br />
        <label htmlFor="Name">City:</label>

        <input
          type="text"
          value={City}
          onChange={(e) => {
            setCity(e.target.value)
          }}
          required
        />
        <br /><br />
        <input type="submit" />

      </form>

      <h1>Name: {newName}</h1>
      <h1>Age: {newAge}</h1>
      <h1>City: {newCity}</h1>

    </>

  )
}

export default App
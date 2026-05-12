import React from 'react'

const App = () => {
  const sumbitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={(e)=>{
        sumbitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name.'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

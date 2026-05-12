import React, { useState } from 'react'



const App = () => {
  const [title, setTitle] = useState('')
  const sumbitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted' , title)
    setTitle('')
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={(e)=>{
        sumbitHandler(e)
      }}>
        <input type="text"
        value={title}
         onChange={(e)=>{
          
          setTitle(e.target.value);
          
         }}
          placeholder='Enter your name.'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

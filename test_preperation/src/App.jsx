import React, { useState } from 'react'

const App = () => {
  const [visibility , setVisibility] = useState(true)
  return (
    <>
    {visibility ? <h1>Hello Syed Ali</h1> : <h2>Content Hide</h2>}
    <br />
    
    {visibility ? <button onClick={()=>{
      setVisibility(!visibility)
    }}>Hide</button>
  :
  <button
  onClick={()=>{
    setVisibility(!visibility)
  }}
  >Show</button>
  }
    </>

  )
}

export default App
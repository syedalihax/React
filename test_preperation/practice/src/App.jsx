import React, { useEffect, useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  useEffect(()=>{
    console.log(name)
  }, [name])
  return (
    <>
    <input type="text" value={name} placeholder='Enter Text...'
    
    onChange={(e)=>{
      setName(e.target.value)
    }}
    />
    
    </>

  )
}

export default App
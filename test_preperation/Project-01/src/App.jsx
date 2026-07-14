import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      setUser(data)
    })
    
  }, [])
  
  return (
    <>
    {user.map((userdata)=>{
      return (
        <div key={userdata.id}>
        <hr />
        <h2>{userdata.name}</h2>
        <h2>User Name: {userdata.username}</h2>
        <h3>Email: {userdata.email}</h3>
      </div>
      )
    })}
    </>
  )
}

export default App
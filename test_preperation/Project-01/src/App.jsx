import React from 'react'
import { useState, useEffect } from 'react'
const App = () => {
  const [user, setUser] = useState([])

  useEffect(() => {

    const getUsers = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()
    
    setUser(data)

  }
  getUsers()  
   
  }, [])


  return (
    <>
      {user.map((userdata)=>{
        return(
          <div key={userdata.id}>
            <hr />
            <h2>{userdata.name}</h2>
            <h2>{userdata.username}</h2>
            <h2>Email: {userdata.email}</h2>
          </div>
        )
      })}
    </>
  )
}

export default App
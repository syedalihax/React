import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading ] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getUsers = async () => {

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users') 

        setUser(response.data)

      }
      catch (error) {
        setError(error.message)
      }
      finally{
        setLoading(false)
      }

    }
    getUsers()

  }, [])

  if(loading){
    return(
      <h1>loading...</h1>
    )
  }
  return (
    <>
      {user.map((userdata) => {
        return (
          <div key={userdata.id}>
            <hr />
            <h2>{userdata.name}</h2>
            <h2>{userdata.username}</h2>
            <h2>Email: {userdata.email}</h2>
          </div>
        )
      })}
      {error && <h2>{error}</h2>}
    </>
  )
}

export default App
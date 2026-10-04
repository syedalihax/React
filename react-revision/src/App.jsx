import { useState } from 'react'

const App = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const sent = async () => {

    try {
      setError('')
      setData(null)
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
      })
      if (!response.ok) {
        return setError('request failed')

      }
      console.log(response.status)
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.log("CATCH:", error)
      setError("Network error")
      return
    } finally {
      setLoading(false)
    }

  }
  const register = async () => {

    try {
      setError('')
      setData(null)
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          username : 'Ali',
          email: 'syedali@gmail.com'
        })
      })
      if (!response.ok) {
        return setError('request failed')

      }
      console.log(response.status)
      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.log("CATCH:", error)
      setError("Network error")
      return
    } finally {
      setLoading(false)
    }

  }
  return (
    <div>
      <h1>API Practice</h1>
      <button disabled={loading} onClick={sent}>Send Request</button>
      <button disabled={loading} onClick={register}>reg Request</button>
      {data &&
        data.map((user, index) => {
          return (
            <div key={index}>
              <h1 >{user.id}</h1>
              <h1 >{user.username}</h1>
              <h1 >{user.email}</h1>
            </div>

          )
        })
      }
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default App

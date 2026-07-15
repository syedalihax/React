import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let timer
    const getPosts = async () => {
      try {
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        
      } catch (error) {
        setError(error.message)
      } finally{
        timer = setTimeout(() => {
          
        setLoading(false)
        }, 1000);
      }
    }
    getPosts()
    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>
  return (

    <>
{posts.map((post)=>{
  return(

    <div key={post.id}>
      <hr />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
})}
    </>
  )
}

export default App

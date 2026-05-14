import React, { useState } from 'react'
import Card from './components/Card'
import axios from 'axios'

const App = () => {
  const [convertedData, setConvertedData] = useState([])

  async function getdata() {
    // try {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const finalData = await response.json() 
    //   setConvertedData(finalData) 
    //   console.log(finalData) 
    // } catch (error) {
    //   console.error("Fetching error: ", error)
    // }
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setConvertedData(response.data)
  }

  return (
    <div>
      {convertedData.map((item) => {
        return (
          <Card key={item.id} id={item.id} name={item.name} username={item.username} email={item.email}/>
        )
        
      })}

      <button onClick={getdata}>
        Get Information
      </button>
    </div>
  )
}

export default App
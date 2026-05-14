import React, { useState } from 'react'
import Card from './components/Card'
import axios from 'axios'

const App = () => {
  const [convertedData, setConvertedData] = useState([])

  async function getdata() {
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
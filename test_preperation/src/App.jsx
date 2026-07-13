import React, { useState } from 'react'

const App = () => {
  const students = [
    {
      id: 1,
      name: "Ali",
      age: 22,
      city: "Karachi"
    },

    {
      id: 2,
      name: "Ahmed",
      age: 20,
      city: "Lahore"
    },

    {
      id: 3,
      name: "Hamza",
      age: 24,
      city: "Quetta"
    }

  ]
  return (
    <>
      <h1>Students</h1>
      <div>
      {students.map((student)=>{
        return (
          <div key={student.id}>
            <h1>Name: {student.name}</h1>
            <h1>Role: {student.id}</h1>
            <h1>Age : {student.age}</h1>
            <h1>City: {student.city}</h1>
          </div>
        )
      })}
      </div>
    </>

  )
}

export default App
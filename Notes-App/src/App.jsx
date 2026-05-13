import React, { useState } from 'react'
import Card from './Components/Card'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])


  const submitHandler = (e) => {

    const newTask = [...task]
    
    newTask.push({ title, detail })
    
    setTask(newTask)
    
    
    setDetail('')
    setTitle('')
  }
  
  const Del = (id) =>{
    const newTask = [...task]
    newTask.splice(id , 1)
    setTask(newTask)
  }
  const handleInput = (e) => {
    const element = e.target;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  return (
    <div className='bg-black h-screen text-white flex flex-col overflow-hidden'>


      <form onSubmit={(e) => {
        if (title == "") {
          e.preventDefault()
        } else {

          e.preventDefault()
          submitHandler(e)
        }
      }}
        className='flex w-full sm:w-11/12 md:w-10/12 md:max-w-175 mx-auto  flex-col gap-5 p-5 sm:p-8'>


        <input type="text"
          placeholder='Title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          className=' outline-none border rounded-[10px] py-2.5 px-5' />


        <textarea type="text"
          onChange={handleInput, (e) => {
            setDetail(e.target.value);
            handleInput(e);
          }}
          value={detail}
          placeholder='Write Details'
          className='outline-none border rounded-[10px] py-3 px-5  overflow-hidden resize-none' >
        </textarea>


        <button className='border border-white bg-white text-black py-3 rounded-[10px] overflow-auto active:scale-95 resize-none font-bold sm:text-2xl'>Add Note</button>


      </form>

      <div>

        <h1 className='ml-8 mb-2.5 sm:ml-15 md:ml-20 text-3xl font-bold'>Your Recent Notes</h1>
        <div className=' py-15 px-5 sm:px-10 md:px-10 w-full flex gap-y-8 gap-x-3 flex-wrap justify-evenly max-h-[60vh] overflow-y-auto'>
          {task.map((data, idx) => {
            return (

              <Card
               id={idx}
                key={idx}
                title={data.title}
                detail={data.detail}
                action = {Del}
                />
            )
          })}


        </div>
      </div>

    </div >

  )
}

export default App

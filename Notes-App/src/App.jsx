import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const submitHandler = (e) => {
    console.log(title)
    setTitle('')
    console.log(detail)
    setDetail('')
  }
  const handleInput = (e) => {
    const element = e.target;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  return (
    <div className='bg-black h-screen text-white flex flex-col'>


      <form onSubmit={(e) => {
        e.preventDefault()
        submitHandler(e)
      }} className='flex w-full sm:w-11/12 md:w-10/12 md:max-w-175 mx-auto  flex-col gap-5 p-5 sm:p-8'>


        <input type="text"
          placeholder='Title'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          className=' outline-none border rounded-[10px] py-2.5 px-5' />


        <textarea type="text"
          onChange={handleInput}
          value={detail}
          onch
          placeholder='Write Details'
          className='outline-none border rounded-[10px] py-3 px-5  overflow-hidden resize-none' >
        </textarea>


        <button className='border border-white bg-white text-black py-3 rounded-[10px] overflow-auto resize-none font-bold sm:text-2xl'>Add Note</button>


      </form>


      <div className='bg-amber-800 py-5 px-5 sm:px-10 md:px-10 w-full flex gap-y-8 gap-x-3 flex-wrap justify-evenly max-h-[80vh] overflow-y-auto custom-scrollbar'>

        <div className='text-black p-5 bg-gray-300 w-60 sm:w-60 md:w-75 min-h-50 border-none rounded-[10px]'>
          <h1 className='sm:text-3xl border-b-2 p-1 mb-4'>Title</h1>
          <p className='sm:text-lg'>Description...</p>
        </div>

        <div className='text-black p-5 bg-gray-300 w-60 sm:w-60 md:w-75 min-h-50 border-none rounded-[10px]'>
          <h1 className='sm:text-3xl border-b-2 p-1 mb-4'>Title</h1>
          <p className='sm:text-lg'>Description...</p>
        </div>

        <div className='text-black p-5 bg-gray-300 w-60 sm:w-60 md:w-75 min-h-50 border-none rounded-[10px]'>
          <h1 className='sm:text-3xl border-b-2 p-1 mb-4'>Title</h1>
          <p className='sm:text-lg'>Description...</p>
        </div>
        
       
        
       
        
        
      </div>
     
    </div >
    
  )
}

export default App

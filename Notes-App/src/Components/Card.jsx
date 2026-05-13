import React from 'react'
import { X } from 'lucide-react';

const Card = (props) => {
  
  return (
    <div className="relative text-black bg-gray-300 p-5 w-60 sm:w-60 md:w-75 min-h-50 border-none rounded-[10px] overflow-hidden">
      <X 
        onClick={
          ()=>{
           props.function(props.id) 
          }
        }
        className='absolute right-5 top-7 hover:bg-gray-400 cursor-pointer w-8 h-8 p-1 bg-gray-300 rounded-2xl'
      />

      <h1 className='text-2xl sm:text-3xl border-b-2 p-1 mb-4 overflow-hidden wrap-normal whitespace-pre-wrap'>
        {props.title}
      </h1>

      <p className='sm:text-lg wrap-anywhere whitespace-pre-wrap'>{props.detail}

      </p>
    </div>

  )
}

export default Card

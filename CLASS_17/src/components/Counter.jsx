import React from 'react'
import useStore from '../zustand/store/store'

const Counter = () => {
    const {count , dispatch} = useStore()

  return (
    <div className='flex flex-col items-center gap-4 mt-10'>
      <h1 className='text-3xl font-bold'>Count : {count}</h1>
      <div className='flex gap-3'>
        <button 
        onClick={()=>dispatch({type:"INCREMENT"})}
        className='bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700'>Increment</button>
        
        <button 
        onClick={()=>dispatch({type:"DECREMENT"})}
        className='bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700'>Decrement</button>
        
        <button 
        onClick={()=>dispatch({type:"RESET"})}
        className='bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700'>Reset</button>
      </div>
    </div>
  )
}

export default Counter

import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {
    const [count, setCount] =useState(0)
  return (
    <div className='flex items-center gap-4 mt-2'>
      <Button onClick={()=> setCount(count-1)}>
        Decrease
      </Button>
      <span className='font-bold textlg px-3'>{count}</span>
      <Button onClick={()=>setCount(count+1)}>
        Increase
      </Button>
    </div>
  )
}

export default Counter

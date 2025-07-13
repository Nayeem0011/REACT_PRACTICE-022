import React from 'react'

const Card = ({title, children}) => {
  return (
    <div className='bg-white shadow-md rounded p-6 mb-6'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        {children}
    </div>
  )
}

export default Card

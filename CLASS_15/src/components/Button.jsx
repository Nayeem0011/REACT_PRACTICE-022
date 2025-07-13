import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
        {children}

      </button>
    </div>
  )
}

export default Button

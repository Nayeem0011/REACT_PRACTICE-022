import React from 'react'

const AccessibleForm = () => {
  return (
    <div>
      <form className='flex flex-col gap-4 -mt-2'>
        <label htmlFor="email">Email Address</label>
        <input type="email" 
        name="email" id="email"
        aria-label="email"
        required
        className="border px-2 py-1 rounded" />
        <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>
            Submit
        </button>
      </form>
    </div>
  )
}

export default AccessibleForm

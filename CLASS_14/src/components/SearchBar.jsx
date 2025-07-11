import React, { Fragment, useContext, useState } from 'react'
import { WeatherContext } from '../context/WeatherContext'

const SearchBar = () => {
   const [input, setInput] = useState('')
   const {fetchWeather} = useContext(WeatherContext)
   const SubmitHandler = (e) => {
    e.preventDefault()
    if(input.trim()){
      fetchWeather(input.trim())
    }

   }
  return (
    <Fragment>
      <form className=" flex items-center gap-2 w-full bg-white border
       border-blue-200 rounded-full px-4 py-2 shadow-sm focus-within:ring-2
       focuc-focus-within:ring-blue-400 transition" onSubmit={SubmitHandler}>
       {/* <form className="flex items-center gap-2 w-full bg-white border
      border-blue-200 rounded-full px-4 py-2 shadow-sm focus-within:ring-2
      focus-within:ring-blue-400 transition"onSubmit={SubmitHandler}> */}

        <input type="text"
        placeholder="Search for a City"
        value={input}
        onChange={(e) =>setInput (e.target.value)}
        className="flex-grow outline-none bg-transparent text-sm text-gray-800
         placeholder-gray-800"/>
         
         <button type="submit"
         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2
         text-sm rounded-full transition font-medium ">
          Search
         </button>

      </form>
    </Fragment>
  )
}

export default SearchBar
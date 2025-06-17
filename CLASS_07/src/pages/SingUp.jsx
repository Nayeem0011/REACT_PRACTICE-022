import React, { Fragment, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SingUp = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const navigate = useNavigate()

    const changeHandler = (event) => {
        const {name, value} = event.target
        setData({...data, [name]:value})
    }
    const submitHandler = async(event) => {
        event.preventDefault()
        console.log(data)

        try {
            setLoading(true)
            const response = await fetch("https://task-management-api-sigma.vercel.app/api/v1/user/signup",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(data)
            })

            const responseData = await response.json()

            console.log(responseData)
            if (responseData.success === false){
                toast.error(responseData.message)
                setLoading(false)
            }else if (responseData.statusCode === 200) {
                toast.success(responseData.message)
                setLoading(false)
                navigate("/")
            }

        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }

  return (
    <Fragment>

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={submitHandler} className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-4">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create an Account</h2>

                <div className='my-1'>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" 
                    placeholder="Enter Your Name" 
                    name='name' id='name' 
                    className="input input-md" 
                    onChange={changeHandler} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"/>
                </div>

                <div className='my-1'>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input type="email" 
                    placeholder="Enter Your Email" 
                    name='email' id='email' 
                    className="input input-md" 
                    onChange={changeHandler} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"/>
                </div>

                <div className='my-1'> 
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Your Password</label>
                    <input type="password" 
                    placeholder="Enter Your Password" 
                    name='password' 
                    id='password' 
                    className="input input-md" 
                    onChange={changeHandler} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"/>
                </div>

                <div className='my-1'>
                    <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700 mb-1">Your Phone Number</label>
                    <input type="text" 
                    placeholder="Enter Your Phone Number" 
                    name='phoneNo' 
                    id='phoneNo' 
                    className="input input-md" 
                    onChange={changeHandler} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"/>
                </div>

                <div>
                    {
                    loading ?(
                    <div className="flex justify-center"><span className="loading loading-dots loading-md loading-md text-blue-500"></span></div>)
                    : <input type='submit' 
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"/>
                 }
                </div>
            </form>
        </div>
      
    </Fragment>
  )
}

export default SingUp
import React, { Fragment, useState } from 'react'
import { auth } from '../../firebase.config';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import ToastComponent from '../components/ToastComponent';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [
  signInWithEmailAndPassword,
  user,
  error,
] = useSignInWithEmailAndPassword(auth);


  const changeHandler = (event) =>{
    // console.log(event.target.value)
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }
  console.log(formData)

  const submitHandler = async(event) =>{
    event.preventDefault()
    setLoading(true)
    const response = await signInWithEmailAndPassword(formData.email, formData.password)
    console.log(response?.user)
    if (response.user.accessToken){
      localStorage.setItem("token", response.user.accessToken)
      navigate("/homepage")
      setLoading(false)
      return <ToastComponent/>
    }
    setLoading(false)
  }

  return (
    <Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

       <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {
            loading ? <span className="loading loading-dots loading-md"></span> :" Submit"
          }
        </button>
      </form>
    </div>
    </Fragment>
  )
}

export default Register

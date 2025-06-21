import React, { Fragment, useState } from 'react'
import { auth } from '../../firebase.config';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import ToastComponent from '../components/ToastComponent';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [
    createUserWithEmailAndPassword,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const changeHandler = (event) =>{
    // console.log(event.target.value)
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }
  console.log(formData)

  const submitHandler = async(event) =>{
    event.preventDefault()
    setLoading(true)
    const response = await createUserWithEmailAndPassword(formData.email, formData.password)
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
        {
          error && <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! Something Went Wrong! Pleace Try again.</span>
              </div>
        }
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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

        <div className="mb-6">
          <label htmlFor="confirm_password" className="block text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
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

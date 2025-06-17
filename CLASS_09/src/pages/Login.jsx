// import React, { Fragment, useState } from 'react'
// import { toast } from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//     const [loading, setLoading] = useState(false)
//     const [data, setData] = useState({})
//     const navigate = useNavigate()

//     const changeHandler = (event) => {
//         const {name, value} = event.target
//         setData({...data, [name]:value})
//     }
//     const submitHandler = async(event) => {
//         event.preventDefault()
//         console.log(data)


//         try {
//           setLoading(true)
//           const response = await fetch("https://task-management-api-sigma.vercel.app/api/v1/auth/login",{
//                 method:"POST",
//                 headers:{
//                     "content-type":"application/json"
//                 },
//                 body: JSON.stringify(data)
//             })

//             const responseData = await response.json()
//             console.log(responseData)
//             if (responseData.success === false){
//               toast.error (responseData.message)
//               setLoading(false)
//             }else if (responseData.success === true){
//               console.log(responseData)
//               localStorage.setItem("token", responseData.data.accessToken)
//               toast.success(responseData.message)
//               setLoading(false)
//               navigate("/")
//             }
//         } catch (error) {
//           console.log(error)
//           setLoading(false)
//         }

//     }

//   return (
//     <Fragment>

//         <div>
//             <form onSubmit={submitHandler}>
//                 <div className='my-1'>
//                     <label htmlFor="email">Your Email</label>
//                     <input type="email" 
//                     placeholder="Enter Your Email" 
//                     name='email' id='email' 
//                     className="input input-md" 
//                     onChange={changeHandler}/>
//                 </div>
//                 <div className='my-1'> 
//                     <label htmlFor="password">Your Password</label>
//                     <input type="password" 
//                     placeholder="Enter Your Password" 
//                     name='password' 
//                     id='password' 
//                     className="input input-md" 
//                     onChange={changeHandler}/>
//                 </div>
//                 {
//                     loading ? <span className="loading loading-dots loading-md"></span> : <input type='submit' className='btn btn-primary'/>
//                 }
//             </form>
//         </div>
      
//     </Fragment>
//   )
// }

// export default Login






import React, { Fragment, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const changeHandler = (event) => {
    const { name, value } = event.target
    setData({ ...data, [name]: value })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    console.log(data)

    try {
      setLoading(true)
      const response = await fetch(
        "https://task-management-api-sigma.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        }
      )

      const responseData = await response.json()
      console.log(responseData)
      if (responseData.success === false) {
        toast.error(responseData.message)
        setLoading(false)
      } else if (responseData.success === true) {
        localStorage.setItem("token", responseData.data.accessToken)
        toast.success(responseData.message)
        setLoading(false)
        navigate("/")
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <Fragment>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login to Your Account
          </h2>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Your Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              id="password"
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4">
            {loading ? (
              <div className="flex justify-center">
                <span className="loading loading-dots loading-md text-blue-500"></span>
              </div>
            ) : (
              <input
                type="submit"
                value="Login"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              />
            )}
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Login


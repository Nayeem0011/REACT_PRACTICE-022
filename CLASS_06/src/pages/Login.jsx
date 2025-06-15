import React, { Fragment, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
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
          const response = await fetch("https://task-management-api-sigma.vercel.app/api/v1/auth/login",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(data)
            })

            const responseData = await response.json()
            console.log(responseData)
            if (responseData.success === false){
              toast.error (responseData.message)
              setLoading(false)
            }else if (responseData.success === true){
              console.log(responseData)
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

        <div>
            <form onSubmit={submitHandler}>
                <div className='my-1'>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" 
                    placeholder="Enter Your Email" 
                    name='email' id='email' 
                    className="input input-md" 
                    onChange={changeHandler}/>
                </div>
                <div className='my-1'> 
                    <label htmlFor="password">Your Password</label>
                    <input type="password" 
                    placeholder="Enter Your Password" 
                    name='password' 
                    id='password' 
                    className="input input-md" 
                    onChange={changeHandler}/>
                </div>
                {
                    loading ? <span className="loading loading-dots loading-md"></span> : <input type='submit' className='btn btn-primary'/>
                }
            </form>
        </div>
      
    </Fragment>
  )
}

export default Login

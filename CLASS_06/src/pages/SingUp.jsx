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

        <div>
            <form onSubmit={submitHandler}>
                <div className='my-1'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" 
                    placeholder="Enter Your Name" 
                    name='name' id='name' 
                    className="input input-md" 
                    onChange={changeHandler}/>
                </div>
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
                <div className='my-1'>
                    <label htmlFor="phoneNo">Your Phone Number</label>
                    <input type="text" 
                    placeholder="Enter Your Phone Number" 
                    name='phoneNo' 
                    id='phoneNo' 
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

export default SingUp
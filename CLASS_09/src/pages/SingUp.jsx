import React, { Fragment, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../utils/Firebase";

const SingUp = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(data);
    const response = await createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    if (response.user.accessToken) {
      toast.success("Account created successfully!");
      localStorage.setItem("token", response.user.accessToken);
      navigate("/");
    } else {
      toast.error("Failed to create account. Please try again", error.message);
    }
  };

  if (loading) {
    // toast.loading("Loading....")
  }

  return (
    <Fragment>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create an Account
          </h2>

          {/* <div className='my-1'>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" 
                    placeholder="Enter Your Name" 
                    name='name' id='name' 
                    className="input input-md" 
                    onChange={changeHandler} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"/>
                </div> */}

          <div className="my-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              className="input input-md"
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
            />
          </div>

          <div className="my-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              id="password"
              className="input input-md"
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
            />
          </div>

          {/* <div className='my-1'>
                    <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700 mb-1">Your Phone Number</label>
                    <input type="text" 
                    placeholder="Enter Your Phone Number" 
                    name='phoneNo' 
                    id='phoneNo' 
                    className="input input-md" 
                    onChange={changeHandler} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"/>
                </div> */}

          <div>
            {loading ? (
              <div className="flex justify-center">
                <span className="loading loading-dots loading-md  text-blue-500"></span>
              </div>
            ) : (
              <div>
                <input
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                />
                <Link to={"/login"}>
                  <p className="font-bold text-sm text-gray-700 mt-5 hover:text-blue-600 cursor-pointer">
                    Already have an account? Login here!
                  </p>
                </Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SingUp;

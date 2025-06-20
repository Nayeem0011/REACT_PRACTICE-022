import React, { Fragment, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../utils/firebase";

const Login = () => {
  // const [loading, setLoading] = useState(false)
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword,loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(data);
    const response = await signInWithEmailAndPassword(
      data.email,
      data.password
    );
    if (response.user.accessToken) {
      toast.success("Login successfully!");
      localStorage.setItem("token", response.user.accessToken);
      navigate("/");
    } else {
      toast.error("Failed to create account. Please try again", error.message);
    }

    // try {
    //   setLoading(true)
    //   const response = await fetch(
    //     "https://task-management-api-sigma.vercel.app/api/v1/auth/login",
    //     {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json"
    //       },
    //       body: JSON.stringify(data)
    //     }
    //   )

    //   const responseData = await response.json()
    //   console.log(responseData)
    //   if (responseData.success === false) {
    //     toast.error(responseData.message)
    //     setLoading(false)
    //   } else if (responseData.success === true) {
    //     localStorage.setItem("token", responseData.data.accessToken)
    //     toast.success(responseData.message)
    //     setLoading(false)
    //     navigate("/")
    //   }
    // } catch (error) {
    //   console.log(error)
    //   setLoading(false)
    // }
  };

  const googleSingIn = async () =>{
    const response = await signInWithGoogle()
    console.log(response)
    if (response.user.accessToken) {
      toast.success("Login successfully!");
      localStorage.setItem("token", response.user.accessToken);
      navigate("/");
    } else {
      toast.error("Failed to create account. Please try again", error.message);
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
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
            />
          </div>

          <div>
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
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
            />
          </div>

          <div className="pt-2">
            {loading ? (
              <div className="flex justify-center">
                <span className="loading loading-dots loading-md text-blue-500"></span>
              </div>
            ) : (
              <div>
                <input
                  type="submit"
                  value="Login"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                />
                <p  className="font-bold text-sm text-gray-700 mt-3 text-center">Or</p>
                <button
                  type="button"
                  onClick={googleSingIn}
                  className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300 text-gray-700 font-medium mt-3 cursor-pointer">
                  <FcGoogle className="text-xl" />
                  Continue with Google
                </button>
                <Link to={"/singup"}>
                  <p className="font-bold text-sm text-gray-700 mt-3 hover:text-blue-600 cursor-pointer">
                    Don't have an account? Sing Up here!
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

export default Login;

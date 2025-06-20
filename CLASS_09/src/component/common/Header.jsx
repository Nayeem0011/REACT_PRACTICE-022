import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { toast } from "react-hot-toast";

const Header = () => {

  const navigate = useNavigate();
  const user = localStorage.getItem("token")
  const [signOut] = useSignOut(auth);
  // const menuItems = [
  //   {name: "Home", path: "/"},
  //   {name: "About", path: "/about"},
  //   {name: "Contact", path: "/contact"},
  //   {name: "Product", path: "/product"},
  //   {name: "Login", path: "/login"},
  //   {name: "Sing Up", path: "/singup"},
  // ]
  const handleSignOut  = async() => {
    try {
      const respose = await signOut()
      if (respose) {
        alert("You are sing out")
        toast.success("Sing out successfully!")
        localStorage.removeItem("token")
        navigate("/login")
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Fragment>

      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/product"}>Product</Link></li>
          {
            user ? <li><button onClick={handleSignOut }>Sing Out</button></li>:
            <>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/singup"}>Sing Up</Link></li>
            </>
          }
          
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl">Logo</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/product"}>Product</Link></li>
          {
            user ? <li><button onClick={handleSignOut }>Sing Out</button></li>:
            <>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/singup"}>Sing Up</Link></li>
            </>
          }
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">Button</Link>
  </div>
</div>

    </Fragment>
  );
};

export default Header;

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const menuItems = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Contact", path: "/contact"},
    {name: "Product", path: "/product"},
    {name: "Login", path: "/login"},
    {name: "Sing Up", path: "/singup"},
  ]

  return (
    <Fragment>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
           <div className="dropdown">

            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                menuItems.map((item, index) =><li key={index}><Link to={`${item.path}`}>{item.name}</Link></li>)
              }
          </ul>

        </div>
        <Link className="btn btn-ghost text-xl">Logo</Link>
     </div>
     <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {
          menuItems.map((item, index) =><li key={index}><Link to={`${item.path}`}>{item.name}</Link></li>)
        }
     </ul>
    </div>
     {/* <div className="navbar-end">
    <Link className="btn">Button</Link>
       </div> */}

    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
     </button>

     <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
     </div>

     </button>
    </div>

    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
            <span className="badge badge-sm indicator-item">8</span>
         </div>
       </div>

       <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">

          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>

          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>

        </div>
      </div>
    </div>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-8 rounded-full">
            <span className="text-xs">UI</span>
         </div>
       </div>
      </div>

      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link className="justify-between">Profile<span className="badge">New</span></Link></li>
        <li><Link>Settings</Link></li>
        <li><Link>Logout</Link></li>
      </ul>

    </div>
  </div>
</div>
    </Fragment>
  )
}

export default Header

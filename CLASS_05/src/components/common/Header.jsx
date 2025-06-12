import React, { Fragment } from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <Fragment>
      
      <header>
        <ul className='navbar-list'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/admission">Admission</Link>
            </li>
            <li>
                <Link to="/post">Posts</Link>
            </li>
        </ul>
      </header>

    </Fragment>
  )
}

export default Header

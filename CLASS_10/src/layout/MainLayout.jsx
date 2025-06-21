import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar/>
      <Outlet/>
    </Fragment>
  )
}

export default MainLayout

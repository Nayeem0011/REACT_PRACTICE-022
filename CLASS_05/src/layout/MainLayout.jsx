import React, { Fragment } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/common/Header'

const MainLayout = () => {
  return (
    <Fragment>
        <Header/>
        <Outlet/>
    </Fragment>
  )
}

export default MainLayout

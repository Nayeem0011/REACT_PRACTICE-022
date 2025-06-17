import React, { Fragment } from 'react';
import Header from '../component/common/Header';
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
    </Fragment>
  )
}

export default MainLayout;

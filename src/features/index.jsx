import React from 'react'
import Sidebar from '../modules/Sidebar'
import DashboardPage from '../pages/DashboardPage'

const Layout = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <DashboardPage/>
    </div>
  )
}

export default Layout
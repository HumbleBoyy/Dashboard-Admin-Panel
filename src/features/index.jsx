import React from 'react'
import DashboardPages from '../pages'
import Sidebar from '../modules/Sidebar'

const Layout = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <DashboardPages/>
    </div>
  )
}

export default Layout
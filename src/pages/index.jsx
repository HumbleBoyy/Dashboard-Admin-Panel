import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { pagesRoutes } from '../hooks/useRoute'

const DashboardPages = () => {
  return (
    <Routes>
        {pagesRoutes.map((item, index)=> <Route key={index} element={item.element} path={item.path}/>)}
    </Routes>
  )
}

export default DashboardPages
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { pagesRoute } from '../hooks/useRoute'

const DashboardPage = () => {
  return (
    <Routes>
        {pagesRoute.map((item)=> <Route path={item.path} element={item.element} key={item.id}/>)}
    </Routes>
  )
}

export default DashboardPage
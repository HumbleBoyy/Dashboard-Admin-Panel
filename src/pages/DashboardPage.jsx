import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { pagesRoute } from '../hooks/useRoute'
import Header from '../modules/Header'

const DashboardPage = () => {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Routes>
          {pagesRoute.map((item)=> <Route path={item.path} element={item.element} key={item.id}/>)}
      </Routes>
    </div>
  )
}

export default DashboardPage
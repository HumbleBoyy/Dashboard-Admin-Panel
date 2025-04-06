import React from 'react'
import { useLocation } from 'react-router-dom'
import { sidebarLinks } from '../hooks/useRoute'

const Header = () => {
    const {pathname} = useLocation()
  return (
    <header className='w-full mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
        {sidebarLinks.map((item) => item.link === pathname ? <h1>{item.title}</h1> : null)}
    </header>
  )
}

export default Header
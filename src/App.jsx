import { Layout } from 'lucide-react'
import React from 'react'

const App = () => {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-[-10px]'>
         <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
         
      </div>
      <Layout/>
    </div>
  )
}

export default App
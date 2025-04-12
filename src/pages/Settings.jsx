import React from 'react'
import Profile from '../components/settings/Profile'
import Notification from '../components/settings/Notification'
import Security from '../components/settings/Security'

const Settings = () => {
  return (
    <div className='flex-1 overflow-auto relative bg-gray-900'>
        <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
            <Profile/>
            <Notification/>
            <Security/>
        </main>
    </div>
  )
}

export default Settings
import React from 'react'
import SettingsSection from './SettingsSection'
import { User } from 'lucide-react'
import ProfileImage from "../../assets/newSix.jpg"
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <SettingsSection icon={User} title={"Profile"}>
        <div className='flex flex-row items-center mb-6'>
           <img src={ProfileImage} alt="Profile" 
            width={50}
            height={50}
            className='rounded-full w-20 h-20 object-cover mr-4'
           />
           <div>
              <h3 className='text-lg font-semibold text-gray-100'>Asadulloh</h3>
              <Link target='_blank' className='text-blue-500' to={"https://asadullohs.vercel.app/"}>asadullohs.uz</Link>
           </div>
        </div>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>Edit Profile</button>
    </SettingsSection>
  )
}

export default Profile
import React from 'react'
import SettingsSection from './SettingsSection'
import { User } from 'lucide-react'

const Profile = () => {
  return (
    <SettingsSection icon={User} title={"Profile"}>
        <div className='flex flex-col sm:flex-row items-center mb-6'>

        </div>
    </SettingsSection>
  )
}

export default Profile
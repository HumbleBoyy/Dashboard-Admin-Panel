import React, { useState } from 'react'
import SettingsSection from './SettingsSection'
import { Lock } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

const Security = () => {
     const [auth, setAuth] = useState({
            twoAuth:true
        })
  return (
    <SettingsSection icon={Lock} title={"Security"}>
       <ToggleSwitch isOn={auth.twoAuth} label={"Two-Factor Authentication"} onToggle={()=> setAuth({...auth, twoAuth: !auth.twoAuth})}/>
       <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>Change Password</button>
    </SettingsSection>
  )
}

export default Security